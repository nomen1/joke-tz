import React from "react";
import s from "./Background.module.css";
import { setResultMessageAC } from "../redux/appReducer";
import { connect } from "react-redux";

const Background = (props) => {
  
  return (
    <div
      className={
        s.background + " " + (props.resultMessage ? s.resultMessageState : " ")
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



export default Background
