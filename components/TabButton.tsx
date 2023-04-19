import { ReactNode } from "react";
import useSound from "use-sound";

interface Props {
  onClick: () => void;
  active: number;
  tab: number;
  children: ReactNode;
}

export const TabButton = (props: Props) => {
  const [play] = useSound("/switch-page.mp3");

  return (
    <button
      onClick={() => {
        props.onClick();
        play();
      }}
      className={`px-5 py-2 rounded-lg font-semibold ${
        props.active === props.tab
          ? "bg-gray-700 text-white"
          : "text-gray-400 bg-gray-800 hover:bg-gray-600 hover:text-white"
      }`}
    >
      {props.children}
    </button>
  );
};
