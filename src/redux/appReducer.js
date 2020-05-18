import { jokesAPI } from "../api";
const SET_JOKE = "SET_JOKE";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_FAV_JOKE = "SET_FAV_JOKE";
const DELETE_FROM_FAV = "DELETE_FROM_FAV";
const SET_RESULT_MESSAGE = "SET_RESULT_MESSAGE";

export const setJokeAC = (joke) => {
  return {
    type: SET_JOKE,
    joke
  };
};

export const setCategoriesAC = (categories) => {
  return {
    type: SET_CATEGORIES,
    categories
  };
};

export const setResultMessageAC = (value) => {
  return {
    type: SET_RESULT_MESSAGE,
    value
  };
};

export const getJokeTC = () => {
  return async (dispatch) => {
    let response = await jokesAPI.getRandomJoke();
    if (response.status === 200) {
      dispatch(setJokeAC(response.data));
    }
  };
};

export const getCategoriesTC = () => {
  return async (dispatch) => {
    let response = await jokesAPI.getCategories();
    dispatch(setCategoriesAC(response.data));
  };
};
export const getRandomFromCategoryTC = (category) => {
  return async (dispatch) => {
    let response = await jokesAPI.getRandomFromCategory(category);
    dispatch(setJokeAC(response.data));
  };
};

export const getFreeTextSearchTC = (keyword) => {
  return async (dispatch) => {
    let response = await jokesAPI.getFreeTextSearch(keyword);
    if (response.data.result.length === 0) {
      dispatch(setResultMessageAC(true));
    } else {
      Math.floor(Math.random() * response.data.result.length);
      let result =
        response.data.result[
          Math.floor(Math.random() * response.data.result.length)
        ];
      dispatch(setJokeAC(result));
    }
  };
};
export const addToFavAC = (joke) => {
  return {
    type: SET_FAV_JOKE,
    joke
  };
};

export const deleteFromFavAC = (joke) => {
  return {
    type: DELETE_FROM_FAV,
    joke
  };
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return [];
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return [];
  }
};

const persistedState = loadFromLocalStorage();

const initialState = {
  jokes: [],
  categories: [],
  favJokes: persistedState,
  resultMessage: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOKE:
      return {
        ...state,
        jokes: [...state.jokes, action.joke]
      };

    case SET_CATEGORIES: {
      return {
        ...state,
        categories: action.categories
      };
    }
    case SET_FAV_JOKE: {
      if (state.favJokes.some((item) => item.id === action.joke.id)) {
        return {
          ...state,
          favJokes: [...state.jokes]
        };
      }
      return {
        ...state,
        favJokes: [...state.favJokes, action.joke]
      };
    }
    case DELETE_FROM_FAV:
      return {
        ...state,
        favJokes: state.favJokes.filter((item) => item.id !== action.joke)
      };
    case SET_RESULT_MESSAGE: {
      return {
        ...state,
        resultMessage: action.value
      };
    }

    default:
      return state;
  }
};

export default appReducer;
