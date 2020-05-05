import React from "react";
import s from  "./FavSide.module.css";
import FavJokes from "../FavJokes/FavJokes"
import Media from "react-media"
import MainSide from "../mainSide/MainSide"
import useMediaQuery from "./../useMediaQueries"








let xsState = s.favSide + " " + s.xsState
let mState  = s.favSide + " " + s.mState
let mdState  = s.favSide + " " + s.mdState






const FivSide = (props) => {
  const xs = useMediaQuery("(max-width: 599px)");
  const m =  useMediaQuery("(min-width: 600px) and (max-width: 1199px)");
  const md =  useMediaQuery("(min-width: 1200px)");


  
  if (props.menuOpened) {
    xsState = s.favSide + " " + s.openXS
    mState = s.favSide + " " + s.open
  }




  return ( 


<div>
  {xs && <div className={xsState }><FavJokes/></div>}
  {m && <div className={mState }><FavJokes/></div>}
  {md && <div className={mdState }><FavJokes/></div>}
</div>
     
    
  );
};


export default FivSide

/*
<div className={m && mState }>
<FavJokes/>
</div>*/