import React from "react";
import { connect } from "react-redux";
import s from "./Form.module.css";
import { Field } from "redux-form";
import { useEffect } from "react";
import {
  getJokeTC,
  getCategoriesTC,
  getRandomFromCategoryTC,
  getFreeTextSearchTC
} from "../redux/appReducer";
import Form from "./Form";

let FormContainer = (props) => {
  useEffect(() => {
    props.getCategories();
  }, []);

  let categoriesArr = props.categories.map((c) => {
    return (
      <div>
       {c} <Field name="jokeCategory" component="input" type="radio" value={c} /> 
      </div>
    );
  });

  return <Form categoriesArr={categoriesArr} {...props} />;
};

let mapStateToProps = (state) => {
  return {
    categories: state.app.categories
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getRandomJoke: () => {
      dispatch(getJokeTC());
    },

    getCategories: () => {
      dispatch(getCategoriesTC());
    },
    getRandomFromCategory: (category) => {
      dispatch(getRandomFromCategoryTC(category));
    },
    getFreeTextSearch: (data) => {
      dispatch(getFreeTextSearchTC(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
