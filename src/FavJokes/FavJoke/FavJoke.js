import React from "react";
import s from "./FavJoke.module.css";
import link from "./../../assets/images/link.png"
import unliked from "./../../assets/images/unliked.png"
import liked from "./../../assets/images/heart.png"
import message from "./../../assets/images/message1.png"
import { useState } from "react";


const FavJoke = (props) => {
   
  const deleteFromFav = (joke) =>{
    props.deleteFromFav(joke)
  }


  const [likedState, setLikedState] = useState(true);
  const lastUpdate = new Date( props.wholeJoke.updated_at);
  const hours = Math.floor((new Date() - lastUpdate) / 3600000);



  
    return (
      <div className = {s.joke}>
      <div className = {s.likeBtn} onMouseEnter = {()=>{ setLikedState(false) }}  onMouseLeave = {()=>{ setLikedState(true) }} onClick = {()=>{
       deleteFromFav(props.wholeJoke)
     }}>
       {likedState &&  <img  src={liked} alt=""></img> }
       {!likedState &&  <img  src={unliked} alt=""></img> }
       </div>
      <div className = {s.content}>
      <div className = {s.jokeLeftSide}>
  <div className = {s.messageImg}><img  src={message} alt=""></img></div>
      </div>
      <div className = {s.jokeRightSide}>
      <div><span className = {s.linkTitle}>ID:</span> 
      <a className={s.link} href = {props.wholeJoke.url}>
              {props.wholeJoke.id}
              <img className = {s.linkImg} src={link} alt=""></img>
            </a>
      
        </div>
      <span className = {s.text}>{props.wholeJoke.value}</span>
      <div className = {s.itemFooter}>
      <div><span className = {s.jokeFooterInfo} >Last update:</span><span className = {s.jokeFooterInfo}>{hours + " hours ago"}</span></div>
      
      </div>
      </div>
      </div>
      
    </div>
    );
  };

  
  export default FavJoke