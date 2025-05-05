"use client";

import { useEffect, useRef, useState } from "react";
import * as Phaser from "phaser";

function demandaBaseRand() {
  return Math.random() * (30 - 10 + 1) + 10;
}

function calcularDemanda(precioVenta, demandaBase) {
  const precioBase = 5;
  const sensibilidad = 1.5;
  return Math.max(0, Math.round(demandaBase - sensibilidad * (precioVenta - precioBase)));
}

const calcularVentasYGanancias = ({ precio, oferta, costo, demandaBase }) => {
  const demanda = calcularDemanda(precio, demandaBase);
  const ventas = Math.min(oferta, demanda);
  const ingreso = ventas * precio;
  const costoTotal = oferta * costo;
  const ganancia = ingreso - costoTotal;

  return { demanda, ventas, ingreso, ganancia, costoTotal };
};

export default function CoffeeGame() {
  const gameRef = useRef(null);
  const containerRef = useRef(null);

  const [dia, setDia] = useState(1);
  const [demandaBase, setDemandaBase] = useState(10);
  const [demanda, setDemanda] =useState(demandaBaseRand());
  const [oferta, setOferta] = useState(10);
  const [costoUnidad, setCostoUnidad] = useState(2);
  const [precioVenta, setPrecioVenta] = useState(5);
  const [balance, setBalance] = useState(0);
  const [unidadesVendidas, setUnidadesVendidas] = useState(0);
  const [juegoActivo, setJuegoActivo] = useState(false);

  const ofertaRef = useRef(oferta);
  const precioRef = useRef(precioVenta);
  const unidadesVendidasRef = useRef(unidadesVendidas);
  const juegoActivoRef = useRef(juegoActivo);
  const diaRef = useRef(dia);
  const demandaRef = useRef(demanda);

  useEffect(() => {
    ofertaRef.current = oferta;
    demandaRef.current = demanda;
    precioRef.current = precioVenta;
    unidadesVendidasRef.current = unidadesVendidas;
    juegoActivoRef.current = juegoActivo;
    diaRef.current = dia;
  }, [oferta, precioVenta, unidadesVendidas, juegoActivo, dia, demanda]);

  useEffect(() => {
    setDemanda(calcularDemanda(precioVenta, demandaBase));
  }, [precioVenta, demandaBase]);

  useEffect(() => {
    if (gameRef.current) return;

    class Scene extends Phaser.Scene {
      constructor(bridge) {
        super("Scene");
        this.reactBridge = bridge;
      }

      preload() {
        this.load.image("background", "/assets/coffee_bg.webp");
        this.load.spritesheet("comprador", "/assets/Comprador.png", {
          frameWidth: 188,
          frameHeight: 319,
        });
      }

      create() {
        this.add.image(0, 0, "background").setOrigin(0, 0);

        this.comprador = this.physics.add
          .sprite(0, 1000, "comprador")
          .setOrigin(0, 1)
          .setScale(2);

        this.anims.create({
          key: "comprador-camina",
          frames: this.anims.generateFrameNumbers("comprador", {
            start: 0,
            end: 2,
          }),
          frameRate: 4,
          repeat: -1,
        });

        this.pauseX = 550;
        this.pauseTime = 2000;
        this.walkSpeed = this.reactBridge.velocidad;
        this.hasPaused = false;
        this.isPaused = false;
        this.comprador.anims.play("comprador-camina", true);

        this.floatText = this.add.text(0, 900, '', { fontSize: '150px', color: '#43ee43', fontStyle: 'bold' }).setOrigin(0.5);
        this.floatText.setVisible(false);

        this.dayCompleteText = this.add.text(768, 45, '', { fontSize: '100px', color: '#ffffff', fontStyle: 'bold' }).setOrigin(0.5);
        this.dayCompleteText.setVisible(false);
      }

      update() {
        const {
          getJuegoActivo,
          getOferta,
          getUnidadesVendidas,
          getDemanda,
          setJuegoActivo,
        } = this.reactBridge;

        if (diaRef.current == 6) {
          this.dayCompleteText.setText('Juego Terminado');
          this.dayCompleteText.setVisible(true);
        }

        if (!getJuegoActivo() || diaRef.current == 6) {
          this.comprador.setFrame(0);
          return;
        }

        if (ofertaRef.current == 0) {
          setDia((prev) => prev + 1);
          this.comprador.anims.stop();
          setJuegoActivo(false);
          this.dayCompleteText.setText('¡Día Completado!');
          this.dayCompleteText.setVisible(true);

          this.time.delayedCall(2000, () => {
            this.dayCompleteText.setVisible(false);
          });
        }

        if (this.isPaused) return;

        this.comprador.anims.play("comprador-camina", true);
        this.comprador.x += this.walkSpeed;

        if (!this.hasPaused && this.comprador.x >= this.pauseX) {
          this.isPaused = true;
          this.hasPaused = true;
          this.comprador.anims.stop();
          this.comprador.setFrame(0);

          const {
            getOferta,
            getPrecio,
            getUnidadesVendidas,
            getDemanda,
            setVentas,
            setOferta,
            setDinero,
          } = this.reactBridge;

          const oferta = getOferta();
          const ventas = getUnidadesVendidas();
          const demanda = getDemanda();
          const precio = getPrecio();

          if (oferta > 0 && ventas < demanda) {
            setVentas(ventas + 1);
            setOferta(oferta - 1);
            setDinero((prev) => prev + precio);
          }

          this.floatText.setText('+' + precio);
          this.floatText.setPosition(1070, 400);
          this.floatText.setVisible(true);

          this.time.delayedCall(1000, () => {
            this.floatText.setVisible(false);
          });

          this.time.delayedCall(this.pauseTime, () => {
            this.isPaused = false;
            this.comprador.anims.play("comprador-camina", true);
          });
        }

        if (this.comprador.x > 1600) {
          this.comprador.x = -100;
          this.hasPaused = false;
          const oferta = getOferta();
          const ventas = getUnidadesVendidas();
          const demanda = getDemanda();
          if (oferta <= 0 || ventas >= demanda) {
            setDia((prev) => prev + 1);
            this.comprador.anims.stop();
            setJuegoActivo(false);
            this.dayCompleteText.setText('¡Día Completado!');
            this.dayCompleteText.setVisible(true);

            this.time.delayedCall(2000, () => {
              this.dayCompleteText.setVisible(false);
            });
          }
        }
      }
    }

    const config = {
      type: Phaser.AUTO,
      parent: containerRef.current,
      backgroundColor: "#222222",
      width: 1536,
      height: 1024,
      scale: {
        parent: "parent",
        mode: Phaser.Scale.FIT,
        width: 1536,
        height: 1024,
      },
      physics: {
        default: "arcade",
      },
      scene: new Scene({
        velocidad: 4,
        getOferta: () => ofertaRef.current,
        getPrecio: () => precioRef.current,
        getUnidadesVendidas: () => unidadesVendidasRef.current,
        getDemanda: () => demandaRef.current,
        getJuegoActivo: () => juegoActivoRef.current,
        setVentas: setUnidadesVendidas,
        setOferta,
        setDinero: setBalance,
        setJuegoActivo,
      }),
    };

    gameRef.current = new Phaser.Game(config);

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  const iniciarNuevoDia = () => {
    const nuevaDemandaBase = demandaBaseRand();
    setDemandaBase(nuevaDemandaBase);

    const nuevaDemanda = calcularDemanda(precioVenta, nuevaDemandaBase);
    setDemanda(nuevaDemanda);

    const { costoTotal } = calcularVentasYGanancias({
      precio: precioVenta,
      oferta,
      costo: costoUnidad,
      demandaBase: nuevaDemandaBase,
    });

    setUnidadesVendidas(0);
    setBalance((prev) => prev - costoTotal);
    setJuegoActivo(true);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex max-w-screen-xl w-full mx-auto">
        <div className="w-1/3 p-4 bg-[#7e3200]/80 text-xl rounded-l-xl">
          <h1 className="font-bold mb-4">Panel de Control</h1>
          <p>Día actual: {dia}</p>
          <p>Demanda estimada: {demanda}</p>
          <p>Costo de hacer 1 café: ${costoUnidad}</p>
          <p>Ventas: {unidadesVendidas}</p>
          <p>Dinero: ${balance}</p>

          <div className="mt-4">
            <label>Precio: </label>
            <input
              type="number"
              value={precioVenta}
              onChange={(e) => setPrecioVenta(Number(e.target.value))}
              className="border px-2 py-1 w-20"
            />
          </div>

          <div className="mt-2">
            <label>Oferta: </label>
            <input
              type="number"
              value={oferta}
              onChange={(e) => setOferta(Number(e.target.value))}
              className="border px-2 py-1 w-20"
            />
          </div>

          {juegoActivo ? (
            <div className="mt-4 bg-gray-400 text-white px-4 py-2 rounded text-center">
              Día en proceso...
            </div>
          ) : (
            <button
              onClick={iniciarNuevoDia}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              {dia === 1 ? "Comenzar" : "Siguiente Día"}
            </button>
          )}
        </div>

        <div id="parent" className="min-w-3/5 ">
          <div ref={containerRef} className="rounded-xl overflow-hidden " />
        </div>
      </div>
    </div>
  );
}
 