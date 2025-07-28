import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div
      className="w-full h-[600px] bg-cover bg-fixed bg-center bg-no-repeat shadow-2xl relative"
      style={{
        backgroundImage: "url('/hero-74ed1429.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="mb-4 text-5xl font-black tracking-widest font-serif goth-title drop-shadow-lg">
            Embrace the Darkness
          </h1>
          <p className="mb-8 text-xl font-light max-w-2xl mx-auto">
            Unleash your style with gothic fashion. Unique, bold, and
            unapologetically dark. Discover our exclusive collection of gothic
            clothing and accessories.
          </p>
          <button className="rounded bg-red-700 px-8 py-3 text-white font-bold uppercase tracking-wider hover:bg-red-900 transition">
            Shop the Collection
          </button>
        </div>
      </div>
    </div>
  );
}
