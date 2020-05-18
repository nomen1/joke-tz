import React from "react";
import s from "./App.module.css";
import useMediaQuery from "./../useMediaQueries";
import Form from "./../Form/FormContainer";
import Jokes from "../Jokes/JokesContainer";
import {useState} from "react";
import FavSide from "../FavSide/FavSide";
import Background from "../Background/BackgroundContainer";



const App = () => {
  const m = useMediaQuery("(min-width: 600px) and (max-width: 1199px)");
  const lg = useMediaQuery("(min-width: 1200px)");
  
  const [FavSideOpened, FavSideToOpen] = useState(false);

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
          
           <div className={s.BtnIcon}></div>
           <div className={s.BtnIcon}></div>

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
        <Form />
        <Jokes />
      </div>
      {FavSideOpened && m && <Background FavSideToOpen={FavSideToOpen}/>}
      <FavSide FavSideOpened={FavSideOpened}FavSideToOpen={FavSideToOpen} />
    </div>
  );
};

export default App;
