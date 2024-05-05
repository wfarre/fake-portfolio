import React from "react";
import style from "./assets/Skill.module.css";

type Props = { skill: string; experience: string };

const Skill = (props: Props) => {
  return (
    <figure className={style.skill}>
      <figcaption className={style.skill__title}>{props.skill}</figcaption>
      <p className={style.skill__experience}>{props.experience}</p>
    </figure>
  );
};

export default Skill;
