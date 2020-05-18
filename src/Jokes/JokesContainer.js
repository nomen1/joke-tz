import { addToFavAC } from "../redux/appReducer";
import { connect } from "react-redux";
import Jokes from "./Jokes"



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
  