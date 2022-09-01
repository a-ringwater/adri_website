import React from "react";

const Button = (props) => {
  const { label, className } = props;
  return (
    <button type="button" className={className}>
      {label}
    </button>
  );
};

export default Button;
