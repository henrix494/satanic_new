export default function Video() {
  return (
    <section className="relative flex items-center justify-center h-[400px] mb-12 overflow-hidden rounded-2xl shadow-xl">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-60"
      >
        <source src="/11721-231759067_small.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-30 p-8 bg-black/70 rounded-xl text-white text-4xl font-bold shadow-lg backdrop-blur-md flex flex-col items-center gap-4">
        <span>הסטייל שלך מתחיל כאן</span>
        <span className="text-lg font-light text-gray-200">
          קולקציה גותית חדשה מחכה לך
        </span>
      </div>
    </section>
  );
}
