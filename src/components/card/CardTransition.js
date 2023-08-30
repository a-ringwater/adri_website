import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import "./CardTransition.scss";

export default function CardTransition({ title, data }) {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "25%", background: "#728EA6" },
    to: {
      size: open ? "100%" : "25%",
      background: open ? "#072040" : "#728EA6",
      color: open ? "#D9D9D9" : "#D9D9D9",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className="wrapper_card">
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className="container_card"
        onClick={() => set((open) => !open)}
      >
        <div className="text-md">{title}</div>
        {transition((style, item) => (
          <animated.div
            className="rounded-md text-md will-change-transform"
            style={{ ...style }}
          >
            {item.name}
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
}
