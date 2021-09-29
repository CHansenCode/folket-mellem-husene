import { useState } from "react";
import NavLink from "../../components/NavLink";

import css from "./Navigation.module.scss";

const Navigation = ({ colors }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h1 style={{ color: colors.primary }} className={css.title}>
        Folket
        <br />
        Mellem
        <br />
        Husene
      </h1>

      <header style={{ color: colors.primary }} className={`${css.header} ${open && css.header_open}`}>
        <nav>
          <button
            style={{ backgroundColor: colors.primary }}
            className={css.openCloseBtn}
            onClick={() => setOpen(!open)}
          >
            <h5>{"menu"}</h5>
          </button>
          <ul className={`${css.slideIn} ${open && css.slideIn_open}`}>
            <NavLink href="/map3d">
              <button style={{ backgroundColor: colors.primary }}>3d</button>
            </NavLink>
            <NavLink href="/map2d">
              <button style={{ backgroundColor: colors.primary }}>2d</button>
            </NavLink>
            <button style={{ backgroundColor: colors.primary }}>ori</button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
