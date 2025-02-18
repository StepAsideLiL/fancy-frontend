"use client";

import WPTextDesign from "@/components/WPTextDesign";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Icons } from "@/lib/icons";

const wordPressFacts = [
  {
    heading: "Free and Open Source",
    subheading: "WordPress is free and open source software.",
    image: "/wp/free-and-open-source.webp",
    icon: Icons.OpenSource,
  },
  {
    heading: "No coding",
    subheading: "WordPress is a no-code tool to create websites.",
    image: "/wp/no-coding.webp",
    icon: Icons.NoCoding,
  },
  {
    heading: "Themes and Plugins",
    subheading: "WordPress has a vast ecosystem of plugins and themes.",
    image: "/wp/themes-and-plugins.webp",
    icon: Icons.Themes,
  },
  {
    heading: "Community",
    subheading: "WordPress has a large and active community.",
    image: "/wp/community.webp",
    icon: Icons.Community,
  },
  {
    heading: "Customizable",
    subheading: "WordPress is customizable through plugins.",
    image: "/wp/customizable.webp",
    icon: Icons.Customizable,
  },
  {
    heading: "Third-Party Tools",
    subheading: "WordPress integrates with third-party tools through plugins.",
    image: "/wp/third-party-tools.webp",
    icon: Icons.Plugins,
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
          className="flex w-[2600px] flex-row flex-nowrap items-stretch justify-center gap-10 overflow-hidden p-20"
        >
          {wordPressFacts.map((fact, i) => (
            <div key={i} className="w-96 flex-shrink-0 border">
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h1 className="text-2xl">{fact.heading}</h1>
                  <fact.icon className="size-7" />
                </div>
                <p>{fact.subheading}</p>
              </div>

              <div className="mt-auto">
                <Image
                  src={fact.image}
                  alt={`Alt of ${fact.heading}`}
                  width={300}
                  height={300}
                  className="w-full object-fill"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
