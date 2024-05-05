import React from "react";
import style from "./assets/Button.module.css";

type Props = { text: string; link: string };

function Button(props: Props) {
  return (
    <a href={props.link} className={style.cta}>
      {props.text}
    </a>
  );
}

export default Button;
