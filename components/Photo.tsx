import Image from "next/image";

export const Photo = (props: any) => {
  return (
    <Image
      className={`rounded-lg ${props.className} h-[200px] w-[500px] hover:opacity-75`}
      width={1000}
      height={1000}
      src={props.img}
      alt="Season Photo"
      priority={true}
    />
  );
};