const AnimatedBlob = () => {
  return (
    <div className="relative">
      <div className="absolute -left-[394px] top-1 h-52 w-[800px] rounded-full bg-blueish opacity-20 blur-3xl dark:bg-purple-500"></div>
      <div className="animate-blob absolute -left-56 top-12 h-80 w-96 rounded-full bg-yellow-100 opacity-60 mix-blend-overlay blur-xl"></div>
      {/* <div className="animate-blob absolute -right-96 top-5 h-72 w-72 rounded-full bg-purple-200 opacity-60 mix-blend-lighten blur-xl"></div> */}
    </div>
  );
};

export default AnimatedBlob;
