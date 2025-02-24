"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export function ExpandableCardDemo({ card }: { card: any }) {
  if (!card) {
    return null;
  }

  return (
    <motion.div
      className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
    >
      <div className="flex gap-4 flex-col w-full">
        {/* Image */}
        <motion.div>
          <Image
            width={1080}
            height={720}
            src={card.src}
            alt={card.title}
            className="h-60 w-full rounded-lg object-cover object-top"
          />
        </motion.div>

        {/* Title and Description */}
        <div className="flex justify-center items-center flex-col">
          <motion.h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
            {card.title}
          </motion.h3>
          <motion.p className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
            {card.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}