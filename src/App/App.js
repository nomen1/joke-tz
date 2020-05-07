import React from "react";
import s from "./App.module.css";
import useMediaQuery from "./../useMediaQueries";
import FormContainer from "./../Form/FormContainer";
import Jokes from "../Jokes/Jokes";
import { useState } from "react";
import FavSide from "../FavSide/FavSide";
import Backdrop from "../Backdrop/Backdrop";
import hidden from "./../assets/images/hidden.png";


const App = () => {
  
  const xs = useMediaQuery("(max-width: 599px)");
  const m = useMediaQuery("(min-width: 600px) and (max-width: 1199px)");
  const lg = useMediaQuery("(min-width: 1200px)");
  
  let [FavSideOpened, FavSideToOpen] = useState(false);

  const FavSideToOpenHandler = () => {
    FavSideToOpen(true);
  };

  return (
    <div className={s.appContainer}>
      <div className={s.mainSection + " " + (lg ? s.lgState : " ")}>
      
        <div className={s.header}>
          <span className={s.sign}>MSI 2020</span>
          {!lg && (
        <div className={s.showFavSide}>
          <div onClick={FavSideToOpenHandler} className={s.showFavSideBtn}>
            <img src={hidden} alt="open-button"></img>
          </div>
          <h1 className={s.showFavSideTitle}>Favourite</h1>
        </div>
      )}
        </div>
        <div className={s.greetingArea}>
          <h1 className={s.greetingTitle}>Hey!</h1>
          <h2 className={s.greetingSubTitle}>
            Let’s try to find a joke for you:
          </h2>
        </div>
        <FormContainer />
        <Jokes />
      </div>
      {FavSideOpened && m && <Backdrop FavSideToOpen={FavSideToOpen}/>}
      <FavSide FavSideOpened={FavSideOpened}FavSideToOpen={FavSideToOpen} />
    </div>
  );
};

export default App;
