import Image, { StaticImageData } from "next/image";

interface Props {
  id: number;
  title: string;
  description: string;
  icon?: StaticImageData | string; // Allow both static imports and strings
  buttonText?: string;
  reverse?: boolean;
}

function Section({
  id,
  title,
  description,
  icon,
  buttonText,
  reverse = false,
}: Props) {
  return (
    <div
      className={`relative flex items-start gap-12 mb-10 ${
        reverse
          ? "md:justify-self-end flex-row-reverse -mr-[5.6rem]"
          : "md:justify-self-start -ml-[5.6rem]"
      }`}
    >
      <div className="flex-shrink-0 bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-full text-black font-bold">
        {id}
      </div>
      <div>
        <div
          className={`flex items-center gap-4 mb-4 ${
            reverse ? "flex-row-reverse" : "justify-start"
          }`}
        >
          {icon && typeof icon === "string" ? (
            <img src={icon} className="w-10" alt={`${title} icon`} />
          ) : icon ? (
            <Image
              src={icon}
              alt={`${title} icon`}
              className="w-10"
              width={40}
              height={40}
            />
          ) : null}
          <h3 className="text-2xl font-medium">{title}</h3>
        </div>
        <p className={`text-gray-400 ${reverse ? "text-right" : "text-left"}`}>
          {description}
        </p>
        {buttonText && (
          <button className="px-4 py-1 font-medium bg-yellow-400 text-black rounded-full hover:bg-yellow-500 mt-8">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default Section;
