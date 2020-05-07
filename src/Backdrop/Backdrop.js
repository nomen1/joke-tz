import React from "react";
import s from "./Backdrop.module.css";
import { setResultMessageAC } from "../redux/appReducer";
import { connect } from "react-redux";

const Backdrop = (props) => {
  return (
    <div
      className={
        s.backdrop + " " + (props.resultMessage ? s.resultMessageState : " ")
      }
    >
      {props.resultMessage && (
        <div className={s.message}>
          <span className={s.messageText}>Oops! Nothing found.</span>{" "}
          <button
            onClick={() => {
              props.closeMessageWindow(false);
            }}
            className={s.messageBtn}
          >
            Ok
          </button>
        </div>
      )}
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);
