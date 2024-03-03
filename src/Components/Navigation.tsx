import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { navLinks } from "../Constants";
import logo from "../assets/logo.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import style from "./Navigation.module.css";

const Navigation = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${style.navPadding} ${style.nav}`}>
      <div className={style.navBar}>
        <Link
          to="/"
          className={style.link}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className={style.logo} />
          <div className={style.textContainer}>
            <p className={style.paragraph}>
              Jeffrey &nbsp;
              <span className={style.span}> | &nbsp; Frontend Developer</span>
            </p>
          </div>
        </Link>
        <ul className={style.ul}>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? `${style.li}` : `${style.li}`
              }`}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>

        <div className={style.menuContainer}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={style.menuToggle}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? `${style.menuNotAppear}` : `${style.menuAppear}`
            } ${style.toggleMenuContainer}`}
          >
            <ul className={style.ulColumn}>
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? `${style.li}` : `${style.li}`
                  }`}
                  onClick={() => setToggle(!toggle)}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
