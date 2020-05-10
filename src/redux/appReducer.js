import { jokesAPI } from "../api";
const SET_JOKE = "SET_JOKE";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_FAV_JOKE = "SET_FAV_JOKE"
const DELETE_FROM_FAV = "DELETE_FROM_FAV"
const SET_RESULT_MESSAGE ="SET_RESULT_MESSAGE"


export const setJokeAC = (joke) => {
  return {
    type: SET_JOKE, joke
  };
};



export const setCategoriesAC = (categories) => {
    return {
      type: SET_CATEGORIES, categories
    };
  };




  export const setResultMessageAC = (value)=>{
    return {
      type: SET_RESULT_MESSAGE, value
    }
  }


export const getJokeTC = () => {
    return async (dispatch) => {
      let response = await jokesAPI.getRandomJoke();
      if(response.status === 200){
        dispatch(setJokeAC(response.data))
    }
      
    };
  };
  

  export const getCategoriesTC = () => {
    return async (dispatch) => {
        let response = await jokesAPI.getCategories();
         dispatch(setCategoriesAC(response.data))
      
        
      }; 
  }
  export const getRandomFromCategoryTC = (category) =>{
    return async (dispatch) => {
      let response = await jokesAPI.getRandomFromCategory(category);
       dispatch(setJokeAC(response.data))
    
      
    }; 
  }
  

  export const getFreeTextSearchTC = (keyword) =>{
    return async (dispatch) => {
      let response = await jokesAPI.getFreeTextSearch(keyword);
      if( response.data.result.length === 0){
        dispatch(setResultMessageAC(true))
      }else{
      Math.floor(Math.random() *  response.data.result.length)
     let result =  response.data.result[ Math.floor(Math.random() *  response.data.result.length)]
      dispatch(setJokeAC(result)) 
      
  }
  }
}
  export const  addToFavAC = (joke)=>{
    return {
      type: SET_FAV_JOKE, joke
    };
  }

  export const deleteFromFavAC = (joke) =>{
    return {
      type: DELETE_FROM_FAV, joke
    };
  }


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
     categories:[],
     favJokes: persistedState,
     resultMessage:false
  }



const appReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_JOKE:{
        const stateCopy = Object.assign({}, state);
        stateCopy.jokes= [...state.jokes];
        stateCopy.jokes.push(action.joke)
       return stateCopy
}
  case SET_CATEGORIES:{ 
    const stateCopy = Object.assign({}, state);
    stateCopy.categories= [...state.categories];
    stateCopy.categories = action.categories
    return stateCopy
  }
  case SET_FAV_JOKE:{
    const stateCopy = Object.assign({}, state);
    stateCopy.favJokes= [...state.favJokes];
    if(state.favJokes.map((o)=>{
          return JSON.stringify(o)}).includes( JSON.stringify(action.joke))){
            return stateCopy
          }else{
            stateCopy.favJokes.push(action.joke)
            return stateCopy
          }
      
  }
  case  DELETE_FROM_FAV :{
    const stateCopy = Object.assign({}, state);
    stateCopy.favJokes =  state.favJokes.map((o)=>{
      return JSON.stringify(o)}).filter( (ob) =>{
        return ob !== JSON.stringify(action.joke)
       }).map((j)=>{
        return JSON.parse(j)
       })
      return stateCopy

  }
  case SET_RESULT_MESSAGE :{
    const stateCopy = Object.assign({}, state);
    stateCopy.resultMessage = action.value
    return stateCopy
  }

 default:
    return state;
    }}


export default appReducer