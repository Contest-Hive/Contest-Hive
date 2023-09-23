const inputClassName =
  "peer block w-full appearance-none border-0 border-b-2 bg-transparent px-0 py-2.5 text-sm  focus:outline-none focus:ring-0 border-gray-600 text-white focus:border-blue-500";
const labelClassName =
  "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium text-gray-400 peer-focus:text-blue-500";

const ContactUs = () => {
  return (
    <form className="mx-auto mb-32 w-[90%] max-w-screen-lg md:w-2/3">
      <header className="mb-14 text-center text-4xl font-medium text-white md:text-6xl">
        Contact Us
      </header>

      {/* Name */}
      <div className="group relative z-0 mb-6 w-full">
        <input
          id="name"
          type="text"
          className={inputClassName}
          placeholder=" "
          required
        />
        <label className={labelClassName} htmlFor="name">
          Name
        </label>
      </div>

      {/* Email */}
      <div className="group relative z-0 mb-6 w-full">
        <input
          id="email"
          type="email"
          className={inputClassName}
          placeholder=" "
          required
        />
        <label htmlFor="email" className={labelClassName}>
          Email Address
        </label>
      </div>

      {/* Message */}
      <div className="group relative z-0 mb-6 w-full">
        <input
          id="message"
          type="text"
          className={`${inputClassName} h-16`}
          placeholder=" "
          required
        />
        <label className={labelClassName} htmlFor="message">
          Message
        </label>
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-1 focus:ring-blue-800 sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactUs;
