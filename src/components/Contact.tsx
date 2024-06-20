import MaxWidthWrapper from "./ui/MaxWidthWrapper";

const Contact = () => {
  return (
    <MaxWidthWrapper>
      <header className="pb-8 pt-10 text-center font-heading  text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
        Contact Us
      </header>
      <p className="mx-auto mb-10 max-w-lg text-balance text-center text-sm md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
        Anything you want to tell us? We are here to listen. 🤝
      </p>
    </MaxWidthWrapper>
  );
};

export default Contact;
