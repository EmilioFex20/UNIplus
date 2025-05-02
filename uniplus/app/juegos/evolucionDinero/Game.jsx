'use client';

import { useEffect, useRef } from 'react';
import Phaser from 'phaser';

export default function Game() {
  const gameRef = useRef(null);

  useEffect(() => {
    class EvolucionDinero extends Phaser.Scene {
      constructor() {
        super('DineroScene');
        this.pedidos = [
          { personaje: 'cavernicola', item: 'piedra', cantidad: 3 },
          { personaje: 'romano', item: 'moneda_bronce', cantidad: 2 },
        ];
        this.pedidoActual = 0;
        this.itemsColocados = 0;
      }

      preload() {
        this.load.image('background', '/assets/background.png');
        this.load.image('piedra', '/assets/background.png');
        this.load.image('moneda_bronce', '/assets/background.png');
        this.load.image('cavernicola', '/assets/caveman.png');
        this.load.image('romano', '/assets/roman.png');
      }

      create() {
        this.add.image(400, 200, 'background');

        const frames = this.textures.get('cards').getFrameNames();
        const x = 100;
        let y = 100;

        for (let i = 0; i < 64; i++) {
          const image = this.add.image(x, y, 'cards', Phaser.Math.RND.pick(frames)).setInteractive();
          this.input.setDraggable(image);
          y += 6;
        } 

        const zone = this.add.zone(500, 300, 300, 300).setRectangleDropZone(300, 300);
        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0xffff00);
        graphics.strokeRect(zone.x - 150, zone.y - 150, 300, 300);

        this.input.on('dragstart', (pointer, gameObject) => {
          this.children.bringToTop(gameObject);
        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
          gameObject.x = dragX;
          gameObject.y = dragY;
        });

        this.input.on('dragenter', () => {
          graphics.clear();
          graphics.lineStyle(2, 0x00ffff);
          graphics.strokeRect(zone.x - 150, zone.y - 150, 300, 300);
        });

        this.input.on('dragleave', () => {
          graphics.clear();
          graphics.lineStyle(2, 0xffff00);
          graphics.strokeRect(zone.x - 150, zone.y - 150, 300, 300);
        });

        this.input.on('drop', (pointer, gameObject, dropZone) => {
          gameObject.x = dropZone.x;
          gameObject.y = dropZone.y;
          gameObject.input.enabled = false;
        });

        this.input.on('dragend', (pointer, gameObject, dropped) => {
          if (!dropped) {
            gameObject.x = gameObject.input.dragStartX;
            gameObject.y = gameObject.input.dragStartY;
          }

          graphics.clear();
          graphics.lineStyle(2, 0xffff00);
          graphics.strokeRect(zone.x - 150, zone.y - 150, 300, 300);
        });
      }
    }

    if (!gameRef.current) {
      gameRef.current = new Phaser.Game({
        type: Phaser.AUTO,
        width: 800,
        height: 400,
        parent: 'phaser-container',
        scene: EvolucionDinero
      });
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return <div id="phaser-container" />;
}
