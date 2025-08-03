export default function Hero() {
  return (
    <div
      className="w-full h-[600px] bg-cover bg-fixed bg-center bg-no-repeat shadow-2xl relative "
      style={{
        backgroundImage: "url('/hero-74ed1429.png')",
        direction: "rtl",
      }}
    >
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center ">
        <div className="text-center text-white px-4 flex flex-col items-center gap-10">
          <h1 className="mb-4 text-5xl font-black tracking-widest font-serif goth-title drop-shadow-lg">
            אופנה גותית אמיתית
          </h1>
          <p className="mb-8 text-xl font-light max-w-2xl mx-auto">
            קולקציה עדכנית של בגדים ואקססוריז בסגנון גותי. איכות, סטייל, ואופי.
          </p>
          <button className="rounded bg-red-700 px-8 py-3 text-white font-bold uppercase tracking-wider hover:bg-red-900 transition">
            לצפייה בקולקציה
          </button>
        </div>
      </div>
    </div>
  );
}
