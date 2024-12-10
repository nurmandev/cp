"use client";

import Image, { StaticImageData } from "next/image";

interface SectionProps {
  id: number;
  title: string;
  description: string;
  icon: StaticImageData; // Update to accept StaticImageData
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  description,
  icon,
  reverse,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-4 md:gap-8`}
    >
      <div className="flex-shrink-0">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={50}
          height={50}
          className="rounded"
        />
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Section;
