import React from "react";
import s from "./FormControls.module.css";

export const SearchLine = ({ input, meta, ...props }) => {
  return (
    <div className={s.formsControl}>
      <input className={s.search} {...input} {...props} />
    </div>
  );
};

export const Category = ({ input, meta, ...props }) => {
  return (
    <div className={s.formsControl}>
      <label
        className={s.category + " " + (input.checked ? s.active : " ")}   
      >
         <input className={s.categoryInput} id={props.id} {...input} {...props} />
        {input.value}
      </label>
     
    </div>
  );
};

export const Option = ({ input, meta, ...props }) => {
  return (
    <div>
      <label className={s.option}>
        {props.optionname}

        <input className={s.optionInput} id={props.id} {...input} {...props} />
        <span
          className={s.radioBtn + " " + (input.checked ? s.checked : " ")}
        ></span>
      </label>
    </div>
  );
};
