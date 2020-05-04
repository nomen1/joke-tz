import React from "react";
import s from  "./MainSide.module.css";
import FormContainer from "./../Form/FormContainer"
import Jokes from "../Jokes/Jokes"
import FavJokes from "../FavJokes/FavJokes"
import Media from "react-media"
const MainSide = () => {
    return (
  
<div className={s.mainSide}>
        <div className={s.mainSection}>
          <div className={s.headerArea}>
            <span className={s.sign}>MSI 2020</span>
          </div>
          <div className={s.greetingArea}>
            <h1 className={s.greetingTitle}>Hey!</h1>
            <h2 className={s.greetingSubTitle}>
              Let’s try to find a joke for you:
            </h2>
          </div>
          <div className={s.chooseArea}>
            <FormContainer />
          </div>

          <Jokes/>
        </div>
      </div>
    )}

    export default MainSide