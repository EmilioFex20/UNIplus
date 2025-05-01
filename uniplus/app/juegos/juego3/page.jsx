'use client';

import dynamic from 'next/dynamic';

const GameComponent = dynamic(() => import('./Game'), { ssr: false });

export default function JuegoEvolucionDinero() {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-black font-bold mb-4">Evolución del Dinero</h1>
      <GameComponent />
    </div>
  );
}
