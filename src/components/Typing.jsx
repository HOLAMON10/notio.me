import { useState, useEffect, useRef } from "react";

const TypingText = ({ text = "", speed = 50, startDelay = 0 }) => {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    let interval;
    indexRef.current = 0;
    setDisplayed("");

    const delayTimer = setTimeout(() => {
      interval = setInterval(() => {
        if (indexRef.current < text.length) {
          const nextChar = text.charAt(indexRef.current);
          setDisplayed((prev) => prev + nextChar);
          indexRef.current++;
        } else {
          clearInterval(interval);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(delayTimer);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return <span>{displayed}</span>;
};

export default TypingText;
