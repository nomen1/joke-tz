import React from "react";
import s from  "./FavSide.module.css";
import FavJokes from "../FavJokes/FavJokes"
import Media from "react-media"
import MainSide from "../mainSide/MainSide"

const FivSide = () => {
  return ( 

      <div className={s.favSide}>
        <FavJokes/>
      </div>
    
  );
};


export default FivSide