"use client";
import { useState } from "react";

const inputClassName =
  "peer block w-full appearance-none border-0 border-b-2 bg-transparent px-0 py-2.5 text-sm  focus:outline-none focus:ring-0 border-gray-600 text-white focus:border-blue-500";
const labelClassName =
  "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium text-gray-400 peer-focus:text-blue-500";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modalSubClass, setModalSubClass] = useState("translate-x-full");
  const [success, setSuccess] = useState(true);
  const [modalText, setModalText] = useState("");
  const [loading, setLoading] = useState(false);
  const [successSvg, setSuccessSvg] = useState(false);

  function openModal() {
    setModalSubClass("-translate-x-20");
    setTimeout(() => setModalSubClass("translate-x-0"), 400);
  }

  function closeModal() {
    setModalSubClass("-translate-x-20");
    setTimeout(() => setModalSubClass("translate-x-full"), 500);
  }

  async function sendMessage(name, email, message) {
    setLoading(true);

    let response = await fetch("/api/others/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    response = await response.json();

    if (!response.ok) {
      setModalText("Message Failed to Send");
      setSuccess(false);
    } else {
      setModalText("Message Sent Successfully");
      setSuccess(true);
    }

    setLoading(false);
    setSuccessSvg(true);
    openModal();

    setTimeout(() => closeModal(), 2000);
    setTimeout(() => setSuccessSvg(false), 2600);

    return response;
  }

  function submitForm(e) {
    e.preventDefault();

    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    sendMessage(name, email, message)
      .then((response) => {
        resp = response;
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <>
      <form
        className="mx-auto mb-32 w-[90%] max-w-screen-lg md:w-2/3"
        onSubmit={submitForm}
        data-aos="fade-up"
        id="contact-us"
      >
        <header className="mb-10 text-center text-4xl font-medium text-white md:text-6xl">
          Contact Us
        </header>
        <div className="mb-10 text-center">
          <p className="text-base text-gray-300 md:text-lg mb-3">
            <span className="font-medium">
              Have a question, suggestion or just wanna say <q>hi</q>?
            </span>
            <br />
            Feel free to contact us. We will get in touch with you as soon as
            possible.
          </p>

          <p className="text-sm text-gray-400">
            If you don't want to share email, just type <q>a@a</q> in email
            field.
            <br />
            You can give your telegram or github username in message field.
          </p>
        </div>

        {/* Name */}
        <div className="group relative z-0 mb-6 w-full">
          <input
            id="name"
            type="text"
            className={inputClassName}
            placeholder=" "
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
          {loading && (
            <svg
              aria-hidden="true"
              className="absolute mb-1 ml-5 inline-block h-6 w-6 animate-spin fill-gray-400 text-gray-600 md:ml-8"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          )}
          {successSvg && (
            <svg
              className="absolute mb-1 ml-5 inline-block h-6 w-6 animate-bounce text-green-500 md:ml-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          )}
        </button>
      </form>

      <div>
        <div
          className={`fixed top-0 mb-4 flex w-full items-center border-t-4 bg-gray-800 bg-opacity-60 p-4 backdrop-blur-md transition duration-500 ease-in-out ${
            success
              ? "border-green-600 text-green-400"
              : "border-red-700 text-red-500"
          }
          ${modalSubClass}`}
        >
          <svg
            className="h-4 w-4 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <div className="ml-3 text-sm font-medium">{modalText}</div>
          <button
            type="button"
            onClick={closeModal}
            className={`-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg  bg-gray-800 p-1.5 focus:ring-2${
              success
                ? "text-green-500 focus:ring-green-500"
                : "text-red-500 focus:ring-red-600"
            }`}
            data-dismiss-target="#alert-border-3"
            aria-label="Close"
          >
            <span className="sr-only">Dismiss</span>
            <svg
              className="h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
