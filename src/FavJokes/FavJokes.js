import React from "react";
import s from "./FavJokes.module.css";
import FavJoke from  "../FavJokes/FavJoke/FavJoke"
import { deleteFromFavAC} from "../redux/appReducer";
import {connect} from "react-redux";
import useMediaQuery from "./../useMediaQueries"
import hidden from "./../assets/images/hidden.png"

const FavJokes = (props) => {


  const md =  useMediaQuery("(min-width: 1200px)");


  const menuClose = ()=>{
    props.menuToOpen(false)
  }




  
    let jokeElements = props.favJokes.map((j) => {
    return <FavJoke deleteFromFav = {props.deleteFromFav} joke = {j}></FavJoke> 
    });
  
   
  
    return (
      <div className = {s.favSide}>
        <div className = {s.showMenu}>{!md && <div onClick = {menuClose} className = {s.showMenuBtn}> <img  src={hidden} alt=""></img> </div>}<h1 className = {s.title}>Favourite</h1></div>
         
        
        {jokeElements}
      </div>
    );
  };



  
let mapStateToProps = (state) => {
  return {
    favJokes:state.app.favJokes
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    deleteFromFav: (joke) =>{
      dispatch(deleteFromFavAC(joke));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FavJokes)