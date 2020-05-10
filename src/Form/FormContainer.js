import React from "react";
import {connect} from "react-redux";
import {Field} from "redux-form";
import {useEffect} from "react";
import {
  getJokeTC,
  getCategoriesTC,
  getRandomFromCategoryTC,
  getFreeTextSearchTC
} from "../redux/appReducer";
import Form from "./Form";
import { Category } from "../FormControls/FormControls";

const FormContainer = (props) => {
  useEffect(() => {
    props.getCategories();
  }, []);

  const categoriesArr = props.categories.map((c, key) => {
    return (
      <div>
        <Field
          name="jokeCategory"
          component={Category}
          type="radio"
          value={c}
          key = {key}
        />
      </div>
    );
  });

  return <Form categoriesArr={categoriesArr} {...props} />;
};

const mapStateToProps = (state) => {
  return {
    categories: state.app.categories,
    resultMessage: state.app.resultMessage
  };
};

const mapDispatchToProps = (dispatch) => {
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
    getFreeTextSearch: (keyword) => {
      dispatch(getFreeTextSearchTC(keyword));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
