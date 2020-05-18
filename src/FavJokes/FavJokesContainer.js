import { deleteFromFavAC } from "../redux/appReducer";
import { connect } from "react-redux";
import FavJokes from "./FavJokes"


const mapStateToProps = (state) => {
    return {
      favJokes: state.app.favJokes
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      deleteFromFav: (joke) => {
        dispatch(deleteFromFavAC(joke));
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(FavJokes);