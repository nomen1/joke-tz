import React from "react";
import s from "./FavJokes.module.css";
import FavJoke from  "../FavJokes/FavJoke/FavJoke"
import { deleteFromFavAC} from "../redux/appReducer";
import {connect} from "react-redux";
import useMediaQuery from "./../useMediaQueries"

const FavJokes = (props) => {










  
    let jokeElements = props.favJokes.map((j) => {
    return <FavJoke deleteFromFav = {props.deleteFromFav} joke = {j}></FavJoke> 
    });
  
   
  
    return (
      <div className = {s.favSide}>
        <h1 className = {s.title}>Favourite</h1>
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