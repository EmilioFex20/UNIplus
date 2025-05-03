"use client";

export function Infografia({ src, alt}) {
  return (
    <div className="w-full max-w-2xl overflow-auto h-full bg-white rounded-xl shadow  mb-6">
      <img src={src} alt={alt} className="w-full object-contain" />
    </div>
  );
}