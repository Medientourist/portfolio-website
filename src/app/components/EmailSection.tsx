"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Email sent successfully");
      setEmailSubmitted(true);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          voluptas qui ullam, facere nesciunt eaque earum animi expedita quos
          atque non nostrum iste perspiciatis, molestiae reiciendis sint!
          Exercitationem, commodi molestias.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/medientourist">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/medientourist/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm mb-2 font-medium" htmlFor="email">
              Your email
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
              name="email"
              type="email"
              id="email"
              required
              placeholder="max.mustermann@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2 font-medium" htmlFor="subject">
              Subject
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Your topic"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm mb-2 font-medium"
            />
            <textarea
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
              name="message"
              id="message"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
