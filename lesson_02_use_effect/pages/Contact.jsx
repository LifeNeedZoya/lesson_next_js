import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import styled from "styled-components";

const Contact = () => {
  const form = useRef();

  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h01xtai",
        "template_egpseiv",
        form.current,
        "Pj6rCxp6cUQWBHKbb"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("sent");
        },
        (error) => {
          console.log(error.text);
          setSuccess("not sent");
        }
      );
  };

  return (
    <div className="container mx-auto grid grid-cols-1  p-10 max-w-3xl">
      <h1 className="font-semibold text-4xl">Contact Us</h1>
      <div className="">
        <div className="mt-6">
          <p>
            Contact Us Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex mt-10">
          <div className="border flex-1 p-4">
            <h3 className="font-bold">Address</h3>
            <address className="text-#696A75;">
              {" "}
              Address 1328 Oak Ridge Drive, <br /> Saint Louis, Missouri
            </address>
          </div>
          <div className="border flex-1 p-4">
            <h3 className="font-bold">Contact</h3>
            <p className="text-#996A75 font-sans">
              Contact 313-332-8662 <br /> info@email.com
            </p>
          </div>
        </div>
      </div>
      <form
        className="bg-[#e7e7e9] p-6 mt-11"
        id="userForm"
        ref={form}
        onSubmit={sendEmail}
      >
        <h3>Leave a Message</h3>
        <div className="flex gap-2">
          <input
            type="text"
            name="user_name"
            id=""
            placeholder="Your Name"
            className="flex-1"
          />
          <input
            type="email"
            name="user_email"
            id=""
            placeholder="Your Email"
            className="flex-1"
          />
        </div>
        <input
          type="text"
          name="na"
          id=""
          placeholder="Subject "
          className="my-6 w-full
          "
        />
        <textarea
          type="text"
          placeholder="Write a message"
          rows={5}
          cols={50}
        />
        <button type="submit" form="userForm">
          Send a message
        </button>

        {success == "sent"
          ? "Email is sent successfully. We will contact you soon"
          : success == "not sent"
          ? "email did not send "
          : ""}
      </form>
    </div>
  );
};

export default Contact;
