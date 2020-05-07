import React from "react";
import { addToFavAC } from "../redux/appReducer";
import { connect } from "react-redux";
import Joke from "./Joke/Joke";

const Jokes = (props) => {
  let JokesItems = props.jokes.map((j) => {
    return (
      <Joke wholeJoke={j} updated_at={j.updated_at} addToFav={props.addToFav} />
    );
  });

  return <div>{JokesItems}</div>;
};

let mapStateToProps = (state) => {
  return {
    jokes: state.app.jokes,
    favJokes: state.app.favJokes
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addToFav: (joke) => {
      dispatch(addToFavAC(joke));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
