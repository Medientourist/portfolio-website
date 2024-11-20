"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList: {
  metric: string;
  value: number;
  prefix?: string;
  postfix?: string;
}[] = [
  {
    metric: "Projects",
    value: 4,
  },
  {
    metric: "Years",
    value: 1,
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-4xl font-bold flex flex-row">
              {achievement.prefix || ""}
              <AnimatedNumbers
                includeComma
                animateToNumber={achievement.value}
                locale="en-US"
                className="text-4xl font-bold"
              />
              {achievement.postfix || ""}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
