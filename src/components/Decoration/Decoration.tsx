import Image from "next/image";
import React from "react";
import style from "./assets/Decoration.module.css";

type Props = {
  position: "circle" | "bottom-right" | "bottom-left" | undefined;
  image: "circle" | "rings";
};

function Decoration(props: Props) {
  return (
    <aside
      className={`${style.decoration} ${
        style[`decoration--${props.position}`]
      }`}
    >
      <Image
        src={
          props.image === "rings"
            ? "/assets/images/pattern-rings.svg"
            : "/assets/images/pattern-circle.svg"
        }
        fill
        alt=""
      ></Image>
    </aside>
  );
}

export default Decoration;
