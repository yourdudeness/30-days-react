import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed: number;
};
const TypeWritterEffect = ({ text, speed }: Props) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    if (text.length !== 0) {
      let intervalId: null | number = setInterval(() => {
        const nextLetter = text.charAt(index);
        setDisplayedText((prev) => prev + nextLetter);
        index++;

        if (index === text.length) {
          if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
          }
        }
      }, speed);

      return () => clearInterval(intervalId!);
    }
  }, [text, speed]);

  return <p>{displayedText} </p>;
};

export default TypeWritterEffect;
