import React from "react";

// import "./assets/Navbar.css";
import Image from "next/image";

import styles from "./assets/Navbar.module.css";

import Twitter from "./assets/images/icon-twitter.svg";
import Linkedin from "./assets/images/icon-linkedin.svg";
import Github from "./assets/images/icon-github.svg";
import FrontendMentor from "./assets/images/icon-frontend-mentor.svg";

// import Ble from "./assets/images/icon-frontend-mentor.svg";

type Props = { navbarPosition: "header" | "footer" };

const Navbar = (props: Props) => {
  const snsList = [
    { id: 1, title: "github", image: <Github className="icon" /> },
    {
      id: 2,
      title: "frontend-mentor",
      image: <FrontendMentor className="icon" />,
    },
    { id: 3, title: "linkedin", image: <Linkedin className="icon" /> },
    { id: 4, title: "twitter", image: <Twitter className="icon" /> },
  ];
  return (
    <nav className={`${styles.nav} ${styles["nav--" + props.navbarPosition]}`}>
      <h1 className={styles.nav__logo}>adamkeyes</h1>

      <ul className={styles.sns}>
        {snsList.map((sns) => {
          return (
            <li className={styles.sns__item} key={sns.id}>
              {/* <a href="">{sns.image}</a> */}
              {sns.image}
              {/* <img className="img" src={sns.image} alt="" /> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
