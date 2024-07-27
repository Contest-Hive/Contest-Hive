const AnimatedBlob = () => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-1 mx-auto h-52 w-[80vw] max-w-screen-lg -translate-x-1/2 rounded-full bg-blueish opacity-5 blur-3xl dark:bg-purple-700 dark:opacity-20 md:w-[50vw]"></div>
      <div className="absolute -left-56 top-16 h-44 w-44 -translate-x-1/2 animate-blob-phone rounded-full bg-yellow-100 opacity-90 mix-blend-overlay blur-xl dark:opacity-70 md:h-80 md:w-96 md:animate-blob"></div>
      {/* <div className="animate-blob absolute -right-96 top-5 h-72 w-72 rounded-full bg-purple-200 opacity-60 mix-blend-lighten blur-xl"></div> */}
    </div>
  );
};

export default AnimatedBlob;
