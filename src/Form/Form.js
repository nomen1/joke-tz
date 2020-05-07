import React from "react";
import s from "./Form.module.css";
import { reduxForm, Field } from "redux-form";
import { useState } from "react";
import {SearchLine} from "../FormControls/FormControls"


const Form = (props) => {
  let [shownCategoriesArea, showCategoriesArea] = useState(false);
  let [shownSearchArea, showSearchArea] = useState(false);

  const activateCategoriesArea = (value, value1) => {
    showCategoriesArea(value);
    showSearchArea(value1);
  };

  const activateSearchArea = (value, value1) => {
    showCategoriesArea(value1);
    showSearchArea(value);
  };

  const deactivateAll = (value) => {
    showCategoriesArea(value);
    showSearchArea(value);
  };

  let onSubmit = (formData) => {
    switch (formData.category) {
      case "random":
        {
          props.getRandomJoke();
        }
        break;
      case "fromCategories":
        {
          props.getRandomFromCategory(formData.jokeCategory);
        }
        break;
      case "search":
        {
          props.getFreeTextSearch(formData.keyword);
        }
        break;
    }
  };
  return (
    <div>
      <SelectJokeFormContainer
        categoriesArr={props.categoriesArr}
        onSubmit={onSubmit}
        deactivateAll={deactivateAll}
        activateCategoriesArea={activateCategoriesArea}
        shownCategoriesArea={shownCategoriesArea}
        activateSearchArea={activateSearchArea}
        shownSearchArea={shownSearchArea}
      />
    </div>
  );
};

const SelectJokeForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <div>
        
        <Field
          onChange={() => {
            props.deactivateAll(false);
          }}
          name="category"
          component="input"
          type="radio"
          value="random"
        />
        <span>Random:</span>
      </div>

      <div>
        
        <Field
          onChange={() => {
            props.activateCategoriesArea(true, false);
          }}
          name="category"
          component="input"
          type="radio"
          value="fromCategories"
        />
        <span>From categories:</span>
      </div>
      {props.shownCategoriesArea && (
        <div className = {s.categoriesArea}>
          {props.categoriesArr}
        </div>
      )}

      <div>
        
        <Field
          onChange={() => {
            props.activateSearchArea(true, false);
          }}
          name="category"
          component="input"
          type="radio"
          value="search"
        />
        <span>Search:</span>
      </div>

      {props.shownSearchArea && (
        <div>
          <Field name="keyword" component= {SearchLine} placeholder={"Free text search..."}/>
        </div>
      )}

      <div>
        <button className={s.formBtn}>Get a joke</button>
      </div>
    </form>
  );
};

let SelectJokeFormContainer = reduxForm({
  form: "selectJoke"
})(SelectJokeForm);

export default Form;
