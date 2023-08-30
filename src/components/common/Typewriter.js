import React from "react";
import useTypewriter from "../../hooks/useTypewriter";

const Typewriter = ({ strings }) => {
  const currentText = useTypewriter(strings);

  return (
    <div className="wrapper_home">
      <div data-text>{currentText}</div>
    </div>
  );
};

export default Typewriter;
