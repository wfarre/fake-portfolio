import React from "react";
import style from "./assets/SectionHeader.module.css";

type Props = { header: string; content: string };

const SectionHeader = (props: Props) => {
  return (
    <header
      className={`${style["section-header"]} container container--column`}
    >
      <h2 className={style.title}>{props.header}</h2>
      <p className={style.content}>{props.content}</p>
    </header>
  );
};

export default SectionHeader;
