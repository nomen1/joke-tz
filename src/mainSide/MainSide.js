import React from "react";
import s from "./MainSide.module.css";
import FormContainer from "./../Form/FormContainer";
import Jokes from "../Jokes/Jokes";
import { useState } from "react";
import FavSide from "../FavSide/FavSide";
import useMediaQuery from "./../useMediaQueries";
import hidden from "./../assets/images/hidden.png";
import Backdrop from "../Backdrop/Backdrop";
const MainSide = () => {
  const xs = useMediaQuery("(max-width: 599px)");
  const m = useMediaQuery("(min-width: 600px) and (max-width: 1199px)");
  const md = useMediaQuery("(min-width: 1200px)");
  let [menuOpened, menuToOpen] = useState(false);

  const menuOpen = () => {
    menuToOpen(true);
  };

  return (
    <div className={s.mainSide}>
      {m && (
        <div className={s.showMenu}>
          {" "}
          <div onClick={menuOpen} className={s.showMenuBtn}>
            {" "}
            <img src={hidden} alt=""></img>{" "}
          </div>
          <h1 className={s.title}>Favourite</h1>
        </div>
      )}
      <div className={s.mainSection + " " + (md ? s.full : " ")}>
        <div className={s.headerArea}>
          <span className={s.sign}>MSI 2020</span>
        </div>
        {xs && (
          <div className={s.showMenu}>
            {" "}
            <div onClick={menuOpen} className={s.showMenuBtn}>
              {" "}
              <img src={hidden} alt=""></img>{" "}
            </div>
            <h1 className={s.title}>Favourite</h1>
          </div>
        )}
        <div className={s.greetingArea}>
          <h1 className={s.greetingTitle}>Hey!</h1>
          <h2 className={s.greetingSubTitle}>
            Let’s try to find a joke for you:
          </h2>
        </div>
        <div className={s.chooseArea}>
          <FormContainer />
        </div>

        <Jokes />
      </div>

      {menuOpened && m && <Backdrop />}
      <FavSide menuOpened={menuOpened} menuToOpen={menuToOpen} />
    </div>
  );
};

export default MainSide;

