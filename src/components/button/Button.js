import React from "react";

const Button = (props) => {
  const { children, className } = props;
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
};

export default Button;
