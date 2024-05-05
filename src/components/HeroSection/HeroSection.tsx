import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import Decoration from "../Decoration/Decoration";
type Props = {};

function HeroSection(props: Props) {
  return (
    <section className="section section--hero">
      <Decoration image="rings" position={undefined} />
      <ul className="container">
        <li className="description">
          <h2 className="description__title">
            Nice to meet you! I’m <span className="underline">Adam Keyes</span>.
          </h2>
          <p className="description__content">
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <Button text="CONTACT ME" link={""} />
        </li>

        <li className="image-wrapper">
          <Image
            src={`/assets/images/image-profile-desktop.webp`}
            alt="profile"
            fill={true}
            className="profile profile--desktop"
          />
          <Image
            src={`/assets/images/image-profile-tablet.webp`}
            alt="profile"
            fill={true}
            className="profile profile--tablet"
          />
          <Image
            src={`/assets/images/image-profile-mobile.webp`}
            alt="profile"
            fill={true}
            className="profile profile--mobile"
          />
          <Decoration image="circle" position={"circle"} />
        </li>
      </ul>
    </section>
  );
}

export default HeroSection;
