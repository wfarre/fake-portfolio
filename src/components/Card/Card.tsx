import Image from "next/image";
import React from "react";

import style from "./assets/Card.module.css";
import Button from "../Button/Button";

type Props = {
  imageLarge: string;
  imageSmall: string;
  id: string;
  title: string;
  tags: string[];
};

const Card = (props: Props) => {
  return (
    <article className={style.card}>
      <div className={style["image-wrapper"]}>
        <Image
          src={props.imageLarge}
          alt={`project ${props.id}: ${props.title}`}
          className={`${style.image} ${style["image--lg"]}`}
          fill
        />
        <Image
          src={props.imageSmall}
          alt={`project ${props.id}: ${props.title}`}
          className={`${style.image} ${style["image--sm"]}`}
          fill
        />

        <ul className={style.card__links}>
          <li className={style.card__links__item}>
            <Button text="VIEW PORTFOLIO" link="" />
          </li>
          <li className={style.card__links__item}>
            <Button text="VIEW CODE" link="" />
          </li>
        </ul>
      </div>
      <div className={style.metadata}>
        <h3 className={style.card__title}>{props.title}</h3>
        <ul className={style.tags}>
          {props.tags.map((tag, index) => {
            return (
              <li className={style.tag} key={tag + index}>
                {tag}
              </li>
            );
          })}
        </ul>

        <ul className={`${style.card__links} ${style["card__links--bottom"]}`}>
          <li className={style.card__links__item}>
            <Button text="VIEW PORTFOLIO" link="" />
          </li>
          <li className={style.card__links__item}>
            <Button text="VIEW CODE" link="" />
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Card;
