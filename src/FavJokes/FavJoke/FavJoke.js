import React from "react";
import { Link } from 'react-router-dom';
import s from "./FavJoke.module.css";
import link from "./../../assets/images/link.png"
import unliked from "./../../assets/images/Vector(2).png"
import liked from "./../../assets/images/heart.png"
import message from "./../../assets/images/message1.png"


const FavJoke = (props) => {
   
  const deleteFromFav = (joke) =>{
    props.deleteFromFav(joke)
  }

  let likedState = true
  let date = props.joke.updated_at
  let lastUpdate = new Date(date);
  let diff = new Date() - lastUpdate ; 
  let hours =  Math.floor(diff/3600000)

  
    return (
      <div className = {s.joke}>
      <div className = {s.likeBtn} onClick = {()=>{
       deleteFromFav(props.joke)
     }}>
       {likedState &&  <img  src={liked} alt=""></img> }
       {!likedState &&  <img  src={unliked} alt=""></img> }
       </div>
      <div className = {s.content}>
      <div className = {s.jokeLeftSide}>
  <div className = {s.messageImg}><img  src={message} alt=""></img></div>
      </div>
      <div className = {s.jokeRightSide}>
      <div><span className = {s.linkTitle}>ID:</span> <Link className = {s.link} to={props.joke.link}>{props.joke.id}</Link> <img  src={link} alt=""></img> </div>
      <span className = {s.text}>{props.joke.value}</span>
      <div className = {s.itemFooter}>
      <div><span className = {s.jokeFooterInfo} >Last update:</span><span className = {s.jokeFooterInfo}>{hours + " " + "hours ago"}</span></div>
      
      </div>
  
      </div>
      </div>
      
    </div>
    );
  };

  
  export default FavJoke