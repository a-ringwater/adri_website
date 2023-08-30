import { useState, useEffect, useRef } from "react";

const useTypewriter = (strings) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const typingTimeout = useRef(null);
  const animationTimeout = useRef(null);

  useEffect(() => {
    const typeAndErase = async (text) => {
      for (let i = 0; i <= text.length; i++) {
        setCurrentText(text.slice(0, i));
        await sleep(100);
      }

      await sleep(2000); // Pause after typing

      for (let i = text.length; i >= 0; i--) {
        setCurrentText(text.slice(0, i));
        await sleep(50);
      }
    };

    const text = strings[currentIndex];

    const typingDelay = 1000; // Pause before typing

    clearTimeout(typingTimeout.current);
    clearTimeout(animationTimeout.current);

    typingTimeout.current = setTimeout(() => {
      typeAndErase(text);

      const nextIndex = (currentIndex + 1) % strings.length;
      const timeout = (text.length + 1) * 100 + 2000 + text.length * 50; // Total animation time

      animationTimeout.current = setTimeout(() => {
        setCurrentIndex(nextIndex);
      }, timeout);
    }, typingDelay);

    return () => {
      clearTimeout(typingTimeout.current);
      clearTimeout(animationTimeout.current);
    };
  }, [currentIndex, strings]);

  return currentText;
};

export default useTypewriter;
