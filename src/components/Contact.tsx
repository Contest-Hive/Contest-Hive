import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import MdEditor from "./sub/MdEditor";

const Contact = () => {
  return (
    <MaxWidthWrapper id="contact" className="max-w-screen-md px-4">
      <header className="mb-6 mt-10 inline-block border-b-2 px-6 pb-2 text-center font-heading text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
        Contact Us
      </header>
      <p className="mx-auto -mt-3 max-w-lg text-balance text-center text-sm md:max-w-xl md:text-base lg:max-w-2xl lg:text-lg">
        Anything you want to tell us?
        <br />
        We are here to listen 🤝
      </p>
      <p className="mx-auto mb-10 mt-2 max-w-xl text-balance text-sm text-muted-foreground">
        Tell us what you like, what you don&apos;t like, or any suggestion!
        <br />
        But if you want us to reach out to you, please leave your email or
        contact info in the message.
      </p>

      <MdEditor />
    </MaxWidthWrapper>
  );
};

export default Contact;
