import Image from "next/image";

const Description = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        {/* <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center
          rounded"
          alt="hero"
          src="/assets/images/profilePhoto.jpg"
          width={100}
          height={100}
        ></Image> */}
        <div className="text-center lg:w-2/3 w-full">
          <header className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Microdosing synth tattooed vexillologist
          </header>
          <p className="leading-relaxed mb-8">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo
            booth af fingerstache pitchfork.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
