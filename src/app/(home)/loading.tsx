import Loading from "@/components/sub/Loading";

const LoadingPage = () => {
  return (
    <main className="min-h-[100vh] overflow-hidden  bg-[#f5f9ff] dark:bg-[#080f18]">
      <div className="flex min-h-[83vh] items-center justify-center md:min-h-[93vh]">
        <Loading />
        <p className="absolute bottom-5 text-xs font-bold tracking-widest text-primary md:text-sm">
          Original Animation by:{" "}
          <a
            href="https://codepen.io/aaroniker"
            target="_blank"
            className="text-[#5628ee] underline dark:text-[#835eff]"
          >
            Aaron Iker
          </a>
        </p>
      </div>
    </main>
  );
};

export default LoadingPage;
