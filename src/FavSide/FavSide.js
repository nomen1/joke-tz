import React from "react";
import s from "./FavSide.module.css";
import FavJokes from "../FavJokes/FavJokesContainer";
import useMediaQuery from "./../useMediaQueries";

const FivSide = (props) => {
  const xs = useMediaQuery("(max-width: 599px)");
  const m = useMediaQuery("(min-width: 600px) and (max-width: 1199px)");
  const md = useMediaQuery("(min-width: 1200px)");

  let xsState = s.favSide + " " + s.xsState;
  let mState = s.favSide + " " + s.mState;
  let mdState = s.favSide + " " + s.mdState;

  if (props.FavSideOpened) {
    xsState = s.favSide + " " + s.openXS;
    mState = s.favSide + " " + s.openMd;
  }

  let favSideStyle = null;
  if (xs) {
    favSideStyle = xsState;
  } else if (m) {
    favSideStyle = mState;
  } else if (md) {
    favSideStyle = mdState;
  }

  return (
    <div className={favSideStyle}>
      <FavJokes FavSideToOpen={props.FavSideToOpen} />
    </div>
  );
};

export default FivSide;
