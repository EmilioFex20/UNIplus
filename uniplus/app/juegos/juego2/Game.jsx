'use client';

import { useEffect, useRef } from 'react';
import * as Phaser from 'phaser';

export default function Game() {
  const containerRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && !gameRef.current) {
      const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 500,
        parent: containerRef.current,
        backgroundColor: '#f1f1f1',
        scene: {
          preload() {
            this.load.image('trueque', '/avatar.png');
          },
          create() {
            const img = this.add.image(100, 200, 'trueque').setInteractive();
            this.input.setDraggable(img);

            this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
              gameObject.x = dragX;
              gameObject.y = dragY;
            });
          },
        },
      };

      gameRef.current = new Phaser.Game(config);
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} />;
}
