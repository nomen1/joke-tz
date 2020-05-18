import React from "react";
import Joke from "./Joke/Joke";

const Jokes = (props) => {
  let JokesItems = props.jokes.map((j, key) => {
    return (
      <Joke wholeJoke={j} updated_at={j.updated_at} addToFav={props.addToFav} key = {key}/>
    );
  });

  return <div>{JokesItems}</div>;
};



export default Jokes
