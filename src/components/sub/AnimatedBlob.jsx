const AnimatedBlob = () => {
  return (
    <div className="relative">
      <div className="absolute -left-[40vw] top-1 h-52 w-[80vw] rounded-full bg-blueish opacity-5 blur-3xl dark:bg-purple-500 dark:opacity-20 md:-left-[25vw] md:w-[50vw]"></div>
      <div className="animate-blob absolute -left-[15vw] top-16 h-44 w-44 rounded-full bg-yellow-100 opacity-90 mix-blend-overlay blur-xl md:h-80 md:w-96"></div>
      {/* <div className="animate-blob absolute -right-96 top-5 h-72 w-72 rounded-full bg-purple-200 opacity-60 mix-blend-lighten blur-xl"></div> */}
    </div>
  );
};

export default AnimatedBlob;
