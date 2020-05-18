import React from "react";
import s from "./FavJokes.module.css";
import FavJoke from "../FavJokes/FavJoke/FavJoke";
import useMediaQuery from "./../useMediaQueries";


const FavJokes = (props) => {

  const md = useMediaQuery("(min-width: 1200px)");
  const FavSideToOpenHandler = () => {
    props.FavSideToOpen(false);
  };


  



  const jokeElements = props.favJokes.map((j, key) => {
    return <FavJoke deleteFromFav={props.deleteFromFav} wholeJoke={j} key={key}></FavJoke>;
  });

  return (
    <div className={s.favSide}>
      <div className={s.showFavSide + " " + (!md ? s.showFavSideXsMState : " ")}>
        {!md && (
          <div onClick={FavSideToOpenHandler} className={s.showFavSideBtn}>
            <div className={s.BtnIcon}></div>
            <div className={s.BtnIcon}></div>
         </div>
        )}
        <h1 className={s.title}>Favourite</h1>
      </div>

      {jokeElements}
    </div>
  );
};


export default FavJokes