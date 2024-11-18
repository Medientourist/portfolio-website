import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
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
        <form className="flex flex-col">
          <div className="mb-6">
            <label className="block text-sm mb-2 font-medium" htmlFor="email">
              Your email
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg block w-full p-2.5"
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
            className="bg-purple-500 hover:bg-purple-600 font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
