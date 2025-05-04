'use client';

import { useEffect, useRef, useState } from 'react';
import * as Phaser from 'phaser';

export default function CoffeeGame() {
  const gameRef = useRef(null);
  const containerRef = useRef(null);

  const [dia, setDia] = useState(1);
  const [oferta, setOferta] = useState(10);
  const [precio, setPrecio] = useState(5);
  const [dinero, setDinero] = useState(0);
  const [ventas, setVentas] = useState(0);
  const [juegoActivo, setJuegoActivo] = useState(false);
  const demandaDiaria = [5, 8, 12, 4, 15, 10];

  useEffect(() => { 

    if (gameRef.current) return;

    class Scene extends Phaser.Scene {
      constructor(bridge) {
        super('Scene');
        this.reactBridge = bridge;
      }

      preload() {
        this.load.image('background', '/assets/coffee_bg.webp');
        this.load.spritesheet('comprador', '/assets/Comprador.png', {
          frameWidth: 188,
          frameHeight: 319
        });
      }

      create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);

        this.comprador = this.physics.add.sprite(0, 1000, 'comprador')
          .setOrigin(0, 1)
          .setScale(2);

        this.anims.create({
          key: 'comprador-camina',
          frames: this.anims.generateFrameNumbers('comprador', { start: 0, end: 2 }),
          frameRate: 4,
          repeat: -1
        });

        this.pauseX = 550;
        this.pauseTime = 2000;
        this.walkSpeed = this.reactBridge.velocidad; 

        this.isPaused = false;
        this.comprador.anims.play('comprador-camina', true);
      }
      


      update() {
        const {
          getJuegoActivo,
          getOferta,
          getVentas,
          getDemanda,
          setJuegoActivo
        } = this.reactBridge;

        if (!getJuegoActivo()){ 
          this.comprador.setFrame(0) 
          return;}

        if (this.isPaused) return;

        // Avanza caminando
        this.comprador.x += this.walkSpeed;

        // Lógica de pausa a mitad
        if (!this.isPaused && this.comprador.x >= this.pauseX) {
          this.isPaused = true;
          this.comprador.anims.stop();
          console.log("comprador para");
          this.comprador.setFrame(0);

          const { getOferta, getPrecio, getVentas, getDemanda, setVentas, setOferta, setDinero } = this.reactBridge;

          const oferta = getOferta();
          const ventas = getVentas();
          const demanda = getDemanda();
          const precio = getPrecio();

           if (oferta > 0 && ventas < demanda) {
            console.log("Se registra venta");
            setVentas(ventas + 1);
            setOferta(oferta - 1);
            setDinero(prev => prev + precio);
          }

          this.time.delayedCall(this.pauseTime, () => {
            console.log("comprador reanuda");
            this.isPaused = false;
            this.comprador.anims.play('comprador-camina', true);
          });
        }

        if (this.comprador.x > 1600) {
          console.log("comprador llega al final");
          this.comprador.x = -100;

        if (oferta <= 0 || ventas >= demanda) {
          console.log("se quedo sin oferta/demanda y para");
          this.comprador.anims.stop();
          setJuegoActivo(false);
        }
      }
      }
    }

    const config = {
      type: Phaser.AUTO,
      parent: containerRef.current,
      backgroundColor: '#222222',
      width: 1536,
      height: 1024,
      scale: {
        parent: 'parent',
      
        mode: Phaser.Scale.FIT,
    
        width: 1536,
    
        height: 1024
      },
      physics: {
        default: 'arcade'
      },
      scene: new Scene({

        velocidad: 2,
        getOferta: () => oferta,
        getPrecio: () => precio,
        getVentas: () => ventas,
        getDemanda: () => demandaDiaria[dia - 1] || 0,
        getJuegoActivo: () => juegoActivo,
        setVentas,
        setOferta,
        setDinero,
        setJuegoActivo
      })
    };

    gameRef.current = new Phaser.Game(config);

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, [oferta, precio, ventas, dia]);

  const iniciarNuevoDia = () => {
    setDia(prev => prev + 1);
    setVentas(0);
    setOferta(5); // resetear oferta por día
    setDinero(prev => prev - 10); // costo de operar ese día
    setJuegoActivo(true);
  };

return (
<div className='flex'>
  <div className="w-1/3 p-4 bg-gray-100">
  <h1 className="text-xl font-bold mb-4">Panel de Control</h1>
  <p>Día actual: {dia}</p>
  <p>Demanda: {demandaDiaria[dia - 1] || 0}</p>
  <p>Oferta restante: {oferta}</p>
  <p>Precio por café: ${precio}</p>
  <p>Ventas: {ventas}</p>
  <p>Dinero: ${dinero}</p>

  <div className="mt-4">
    <label>Precio: </label>
    <input
      type="number"
      value={precio}
      onChange={e => setPrecio(Number(e.target.value))}
      className="border px-2 py-1 w-20"
    />
  </div>

  <div className="mt-2">
    <label>Oferta: </label>
    <input
      type="number"
      value={oferta}
      onChange={e => setOferta(Number(e.target.value))}
      className="border px-2 py-1 w-20"
    />
  </div>

  <button
    onClick={iniciarNuevoDia}
    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
  >
    Siguiente Día
  </button>
</div>

  <div id="parent" className="w-2/3">
      <div
        ref={containerRef}
      />
  </div>
</div>
);
}
