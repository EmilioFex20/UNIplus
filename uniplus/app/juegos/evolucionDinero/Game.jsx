"use client";

import { useEffect, useRef } from "react";
import Phaser from "phaser";

export default function Game() {
  const gameRef = useRef(null);

  useEffect(() => {
    class DineroScene extends Phaser.Scene {
      constructor() {
        super("DineroScene");
        this.pedidos = [
          {
            personaje: "cavernicola",
            item: "piedra",
            cantidad: 3,
            frase: "Cavernícola querer piedras grandes\n a cambio te daré un pollo",
          },
          {
            personaje: "romano",
            item: "moneda",
            cantidad: 2,
            frase: "¡Por el César! Necesito unas monedas para el mercado\n te parece si te doy un par de espadas a cambio\n de unas monedas",
          },
          {
            personaje: "griego",
            item: "moneda",
            cantidad: 1,
            frase: "Una moneda bastará para mi filosofía",
          },
          {
            personaje: "mujer_billete",
            item: "billete",
            cantidad: 1,
            frase: "¿Puedes darme un billete? Tengo que ir de compras",
          },
          {
            personaje: "hombre_tarjeta",
            item: "tarjeta",
            cantidad: 1,
            frase: "Prefiero pagar con tarjeta, es más práctico",
          },
          {
            personaje: "empresario",
            item: "criptomoneda",
            cantidad: 2,
            frase: "Acepto solo cripto, es el futuro del dinero",
          },
        ];
        this.pedidoActual = 0;
        this.itemsColocados = 0;
      }

      preload() {
        this.load.image("bg", "/assets/background.png");
        this.load.image("piedra", "/assets/piedra.png");
        this.load.image("moneda", "/assets/moneda.png");
        this.load.image("billete", "/assets/billete.png");
        this.load.image("tarjeta", "/assets/tarjeta.png");
        this.load.image("criptomoneda", "/assets/criptomoneda.png");
        this.load.image("cavernicola", "/assets/caveman.png");
        this.load.image("romano", "/assets/roman.png");
        this.load.image("griego", "/assets/greek.png");
        this.load.image("mujer_billete", "/assets/cashLady.png");
        this.load.image("hombre_tarjeta", "/assets/cardMan.png");
        this.load.image("empresario", "/assets/bankman.png");
      }

      create() {
        this.add.image(200, 300, "bg").setScale(2);

        const zonaDropeo = this.add
          .zone(480, 330, 130, 130)
          .setRectangleDropZone(130, 130);
        const cajaZonaDrop = this.add.graphics();
        cajaZonaDrop.lineStyle(2, 0x00ff00);
        cajaZonaDrop.strokeRect(
          zonaDropeo.x - zonaDropeo.input.hitArea.width / 2,
          zonaDropeo.y - zonaDropeo.input.hitArea.height / 2,
          zonaDropeo.input.hitArea.width,
          zonaDropeo.input.hitArea.height
        );

        this.textoPedido = this.add.text(20, 20, "", {
          fontSize: "16px",
          fill: "#000",
          backgroundColor: "#fff",
          padding: { x: 10, y: 5 },
          borderRadius: 10,
        });

        const inventario = [
          { key: "piedra", x: 100, y: 100 },
          { key: "moneda", x: 100, y: 180 },
          { key: "billete", x: 100, y: 260 },
          { key: "tarjeta", x: 100, y: 340 },
          { key: "criptomoneda", x: 100, y: 420 },
        ];

        inventario.forEach((item) => {
          const currency = this.add
            .image(item.x, item.y, item.key)
            .setInteractive();
          currency.setScale(0.6);
          currency.setData("tipo", item.key);
          currency.on("pointerdown", function (pointer) {
            crearClone.call(this.scene, pointer, item.key);
          });
        });

        this.clones = [];

        function crearClone(pointer, key) {
          const clone = this.add
            .image(pointer.x, pointer.y, key)
            .setInteractive()
            .setScale(0.7);
          clone.name = key;
          this.input.setDraggable(clone);
          this.clones.push(clone);
        }

        this.cargarPedido();

        this.input.on("drop", (pointer, gameObject, zonaDropeo) => {
          const pedido = this.pedidos[this.pedidoActual];

          if (gameObject.name === pedido.item) {
            gameObject.input.enabled = false;
            gameObject.x = zonaDropeo.x;
            gameObject.y = zonaDropeo.y;
            this.itemsColocados += 1;

            if (this.itemsColocados === pedido.cantidad) {
              this.time.delayedCall(1000, () => {
                this.pedidoActual += 1;
                this.itemsColocados = 0;
                this.limpiarClones();
                this.cargarPedido();
              });
            }
          } else {
            this.textoPedidoEquivocado = this.add.text(250, 200, "", {
              fontSize: "13px",
              fill: "#000",
              backgroundColor: "#fff",
              padding: { x: 5, y: 5 },
              borderRadius: 10,
            });

            gameObject.x = gameObject.input.dragStartX;
            gameObject.y = gameObject.input.dragStartY;
            this.textoPedidoEquivocado.setText(
              `El ${pedido.personaje} no quiere ${gameObject.name}`
            );
            this.time.delayedCall(2000, () => {
              this.textoPedidoEquivocado.destroy();
            });
          }
        });

        this.input.on("dragstart", (pointer, gameObject) => {
          gameObject.setScale(0.5);
        });

        this.input.on("dragend", (pointer, gameObject) => {
          gameObject.setScale(0.5);
        });

        this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
          gameObject.x = dragX;
          gameObject.y = dragY;
        });
      }

      cargarPedido() {
        if (this.personaje) this.personaje.destroy();
        const pedido = this.pedidos[this.pedidoActual];
        if (!pedido) {
          this.textoPedido.setText("Completaste todos los trueques.");
          return;
        }
        this.personaje = this.add
          .image(600, 300, pedido.personaje)
          .setScale(0.5);

        this.tweens.add({
          targets: this.personaje,
          x: 300,
          ease: "Bounce.easeOut",
          duration: 1000,
          onComplete: () => {
            console.log("Personaje llegó");
          },
        });
        this.tweens.add({
          targets: this.personaje,
          y: 350,
          yoyo: true,
          repeat: 10,
          ease: "Sine.easeInOut",
          duration: 200,
        });
        this.textoPedido.setText(
          `El ${pedido.personaje} quiere ${pedido.cantidad} ${pedido.item}(s)`
        );

        this.frasePersonaje = this.add.text(250, 200, "", {
          fontSize: "13px",
          fill: "#000",
          backgroundColor: "#fff",
          padding: { x: 5, y: 5 },
          borderRadius: 10,
        });
        this.frasePersonaje.setText(
          `${pedido.frase}`
        );
        this.time.delayedCall(5000, () => {
          this.frasePersonaje.destroy();
        });
      }

      limpiarClones() {
        this.clones.forEach((clone) => {
          clone.destroy();
        });
        this.clones = [];
      }
    }

    if (!gameRef.current) {
      gameRef.current = new Phaser.Game({
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: "phaser-container",
        scene: DineroScene,
        backgroundColor: "#cfe8dc",
      });
    }

    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return <div id="phaser-container" />;
}
