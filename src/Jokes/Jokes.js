import React from "react";
import { Link } from 'react-router-dom';
import { addToFavAC} from "../redux/appReducer";
import {connect} from "react-redux";
import s from "./Jokes.module.css";
import { useState } from "react";
import message from "./../assets/images/message.png"
import link from "./../assets/images/link.png"
import unliked from "./../assets/images/Vector(2).png"
import liked from "./../assets/images/heart.png"


const Jokes = (props) => {
  
    let JokesItems = props.jokes.map((j) => {
     return <Joke wholeJoke = {j}  updated_at = {j.updated_at} addToFav = {props.addToFav}/>
    });
  
   
  
    return (
      <div>
        {JokesItems}
      </div>
    );
  };
  
  



const Joke = (props) => {
  let [likedState, setLikedState] = useState(false);
  
  let date = props.updated_at
  let lastUpdate = new Date(date);
  let diff = new Date() - lastUpdate ; 
  let hours =  Math.floor(diff/3600000)
 let addToFav = (joke) => {
   if(likedState){
    setLikedState(false)
    
   }else{
    props.addToFav(joke)
    setLikedState(true)
   }

 }

  return (
    <div className = {s.joke}>
      <div className = {s.likeBtn} onClick = {()=>{
       addToFav(props.wholeJoke)
     }}>
       {likedState &&  <img  src={liked} alt=""></img> }
       {!likedState &&  <img  src={unliked} alt=""></img> }
       </div>
      <div className = {s.content}>
      <div className = {s.jokeLeftSide}>
  <div className = {s.messageImg}><img  src={message} alt=""></img></div>
      </div>
      <div className = {s.jokeRightSide}>
      <div><span className = {s.linkTitle}>ID:</span> <Link className = {s.link} to={props.wholeJoke.link}>{props.wholeJoke.id}</Link> <img  src={link} alt=""></img> </div>
      <span className = {s.text}>{props.wholeJoke.value}</span>
      <div className = {s.itemFooter}>
      <div><span className = {s.jokeFooterInfo} >Last update:</span><span className = {s.jokeFooterInfo}>{hours + " " + "hours ago"}</span></div>
      <div className = {s.category}><span className = {s.categoryName}>{props.wholeJoke.categories[0] ? props.wholeJoke.categories[0] : "random"}</span></div>
      </div>
  
      </div>
      </div>
      
    </div>
  );
};


let mapStateToProps = (state) => {
  return {
    jokes:state.app.jokes,
    favJokes:state.app.favJokes
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addToFav:(joke) =>{
      dispatch(addToFavAC(joke))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Jokes)