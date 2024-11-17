"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>GraphQL</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>JavaScript</li>
        <li>HTML</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>Frontend Developer Program - OpenCampus</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section>
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16">
        <Image
          src="/images/computer-setup.jpg"
          width={500}
          height={500}
          alt="Computer Setup"
          width={500}
          height={500}
        />
        <div className="flex flex-col h-full mt-4 md:mt-0 text-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            voluptatum magni ad deserunt ullam, enim eveniet excepturi ab
            distinctio obcaecati quod nobis dicta odit consequatur, libero
            incidunt adipisci maiores et.
          </p>
        </div>
        <div className="flex flex-row mt-8">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            {" "}
            Skills{" "}
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("certifications")}
            active={tab === "certifications"}
          >
            {" "}
            Zertifikate{" "}
          </TabButton>
        </div>
        <div className="mt-8">
          {TAB_DATA.find((t)=> t.id === tab).content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
