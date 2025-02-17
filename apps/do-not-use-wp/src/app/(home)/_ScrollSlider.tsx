"use client";

import WPTextDesign from "@/components/WPTextDesign";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const wordPressFacts = [
  {
    heading: "Free and Open Source",
    subheading: "WordPress is free and open source software.",
  },
  {
    heading: "No coding",
    subheading: "WordPress is a no-code tool to create websites.",
  },
  {
    heading: "Plugins and Themes",
    subheading: "WordPress has a vast ecosystem of plugins and themes.",
  },
  {
    heading: "Community",
    subheading: "WordPress has a large and active community.",
  },
  {
    heading: "Customizable",
    subheading: "WordPress is customizable through plugins.",
  },
  {
    heading: "Third-Party Tools",
    subheading: "WordPress integrates with third-party tools through plugins.",
  },
];

export default function ScrollSlider() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [0, -2600 / 2]);

  return (
    <section ref={ref} className="min-h-[300vh] overflow-clip">
      <div className="sticky top-0">
        <div className="px-20 pt-10">
          <h1 className="text-4xl">
            Here are some important facts about <WPTextDesign />
          </h1>
        </div>

        <motion.div
          style={{ x: translateX }}
          className="flex w-[2600px] flex-row flex-nowrap items-center justify-center gap-10 overflow-hidden p-20"
        >
          {wordPressFacts.map((fact, i) => (
            <div key={i} className="size-96 flex-shrink-0 border p-5">
              <h1 className="text-2xl">{fact.heading}</h1>
              <p>{fact.subheading}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
