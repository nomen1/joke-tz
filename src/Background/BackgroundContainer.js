import { connect } from "react-redux";
import { setResultMessageAC } from "../redux/appReducer";
import Background from "./Background"



let mapStateToProps = (state) => {
    return {
      resultMessage: state.app.resultMessage
    };
  };
  
  let mapDispatchToProps = (dispatch) => {
    return {
      closeMessageWindow: (value) => {
        dispatch(setResultMessageAC(value));
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Background);
  