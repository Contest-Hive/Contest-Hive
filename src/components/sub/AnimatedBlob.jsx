const AnimatedBlob = () => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-5 mx-auto h-52 w-[90vw] max-w-(--breakpoint-lg) -translate-x-1/2 rounded-full bg-blueish opacity-5 blur-2xl dark:bg-purple-700 dark:opacity-20  md:top-1 md:w-[50vw] md:blur-3xl"></div>
      <div className="absolute -left-32 top-20 h-48 w-56 -translate-x-1/2 animate-blob-phone rounded-full bg-yellow-100 opacity-90 mix-blend-overlay blur-lg dark:opacity-70 md:-left-56  md:top-16 md:h-64 md:w-96 md:animate-blob md:blur-xl"></div>
    </div>
  );
};

export default AnimatedBlob;
