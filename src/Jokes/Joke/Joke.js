import React from "react";
import s from "./Joke.module.css";
import {useState} from "react";
import message from "./../../assets/images/message.png";
import link from "./../../assets/images/link.png";
import unliked from "./../../assets/images/unliked.png";
import liked from "./../../assets/images/heart.png";
import useMediaQuery from "./../../useMediaQueries";

const Joke = (props) => {
  const xs = useMediaQuery("(max-width: 599px)");
  const [likedState, setLikedState] = useState(false);
  const lastUpdate = new Date(props.updated_at);
  const hours = Math.floor((new Date() - lastUpdate) / 3600000);
  const addToFav = (joke) => {
    if (likedState) {
      setLikedState(false);
    } else {
      props.addToFav(joke);
      setLikedState(true);
    }
  };

  return (
    <div className={s.wrapper}>
      <div
        className={s.likeBtn}
        onClick={() => {
          addToFav(props.wholeJoke);
        }}
      >
        {likedState && <img src={liked} alt="liked"></img>}
        {!likedState && <img src={unliked} alt="unliked"></img>}
      </div>
      <div className={s.content}>
        <div className={s.jokeLeftSide}>
          <div className={s.messageImg}>
            <img src={message} alt=""></img>
          </div>
        </div>
        <div className={s.jokeRightSide}>
          <div>
            <span className={s.linkTitle}>ID:</span>
            <a className={s.link} href = {props.wholeJoke.url}>
              {props.wholeJoke.id}
              <img className = {s.linkImg} src={link} alt=""></img>
            </a>
            
          </div>
          <span className={s.text}>{props.wholeJoke.value}</span>
          <div className={s.itemFooter + " " + (xs ? s.footerXs : " ")}>
            <div>
              <span className={s.footerInfo}>Last update:</span>
              <span className={s.footerInfo}>{hours + " hours ago"}</span>
            </div>
            <div className={s.category}>
              <span className={s.categoryName}>
                {props.wholeJoke.categories[0]
                  ? props.wholeJoke.categories[0]
                  : "random"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joke;
