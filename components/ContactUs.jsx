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
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(true);
  const [modalText, setModalText] = useState("Message Sent Successfully");

  async function sendMessage(name, email, message) {
    let response = await fetch("/api/plt", {
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

    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);

    return response;
  }
  function hideModal() {
    setShowModal(false);
  }

  function submitForm(e) {
    e.preventDefault();

    const form = e.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    let resp;
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
      >
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
        </button>
      </form>

      <div>
        <div
          className={`fixed top-0 mb-4 flex w-full items-center border-t-4 bg-gray-800 bg-opacity-60 p-4 backdrop-blur-md transition duration-500 ease-in-out ${
            success
              ? "border-green-600 text-green-400"
              : "border-red-700 text-red-500"
          }
          ${showModal ? "translate-x-0" : "translate-x-full"}`}
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
            onClick={hideModal}
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
