import React from "react";

function Contact() {
  return (
    <>
    <h1 className="text-3xl font-bold text-gray-800 text-center underline pt-20">
        Contact Us
      </h1>
    <form
      className="flex flex-col justify-center py-8 sm:mx-10 mx-5 sm:px-10 px-2  rounded-lg mb-16"
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      <div className="flex flex-col mb-6">
        <input
          type="hidden"
          name="access_key"
          value="97b9413e-2ea8-4b21-921b-f87d710755d6"
        />
        <label htmlFor="name" className="text-lg font-medium mb-2">
          Full Name
        </label>
        <input
          required
          type="text"
          id="name"
          name="fullName"
          placeholder="Enter Your Full Name"
          className="p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 duration-500 outline-none"
        />
      </div>
      <div className="flex flex-col mb-6">
        <label htmlFor="email" className="text-lg font-medium mb-2">
          Email
        </label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          className="p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 duration-500 outline-none"
        />
      </div>
      <div className="flex flex-col mb-6">
        <label htmlFor="subject" className="text-lg font-medium mb-2">
          Subject
        </label>
        <textarea
          required
          name="subject"
          id="subject"
          placeholder="Write Subject"
          className="p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 duration-500 outline-none"
        ></textarea>
      </div>
      <div className="flex flex-col mb-6">
        <label htmlFor="message" className="text-lg font-medium mb-2">
          Message
        </label>
        <textarea
          required
          name="message"
          id="message"
          placeholder="Write Message"
          className="p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 duration-500 outline-none"
        ></textarea>
      </div>
      <button className="bg-blue-500 text-white font-semibold w-32 h-12 rounded-lg shadow-md hover:bg-blue-400 transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-4 focus:ring-offset-2 ">
        Submit
      </button>
    </form>
    </>
  );
}

export default Contact;
