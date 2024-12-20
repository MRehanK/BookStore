import React from "react";

function Contact() {
  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p>
        Feel free to get in touch with us! We're here to help you with your
        queries and support your journey with our platform.
      </p>
      <form className="mt-6">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Enter your name"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            className="border p-2 rounded w-full"
            placeholder="Enter your email"
          />
        </label>
        <label className="block mb-2">
          Message:
          <textarea
            className="border p-2 rounded w-full"
            placeholder="Write your message here"
          ></textarea>
        </label>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
