import { jokesAPI } from "../api";
const SET_JOKE = "SET_JOKE";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_FAV_JOKE = "SET_FAV_JOKE"
const DELETE_FROM_FAV = "DELETE_FROM_FAV"


export let setJokeAC = (joke) => {
  
  return {
    type: SET_JOKE, joke
  };
};



export let setCategoriesAC = (categories) => {
    return {
      type: SET_CATEGORIES, categories
    };
  };







export const getJokeTC = () => {
    return async (dispatch) => {
      let response = await jokesAPI.getRandomJoke();
      if(response.status === 200){
          console.log(response)
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
  

  export const getFreeTextSearchTC = (data) =>{
    return async (dispatch) => {
      let response = await jokesAPI.getFreeTextSearch(data);
      let options = response.data.result
      let randomNumber = Math.floor(Math.random() * options.length)
     let result = options[randomNumber]
      dispatch(setJokeAC(result)) 
      
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



  let initialState = {
     jokes: [],
     categories:[],
     favJokes:[]
  }



const appReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_JOKE:{
        let stateCopy = Object.assign({}, state);
        stateCopy.jokes= [...state.jokes];
        stateCopy.jokes.push(action.joke)
       return stateCopy
}
  case SET_CATEGORIES:{ 
    let stateCopy = Object.assign({}, state);
    stateCopy.categories= [...state.categories];
    stateCopy.categories = action.categories
    return stateCopy
  }
  case SET_FAV_JOKE:{
    let stateCopy = Object.assign({}, state);
    stateCopy.favJokes= [...state. favJokes];
    if(state.favJokes.map((o)=>{
          return JSON.stringify(o)}).includes( JSON.stringify(action.joke))){
            return stateCopy
          }else{
            stateCopy.favJokes.push(action.joke)
            return stateCopy
          }
      
  }
  case  DELETE_FROM_FAV :{
    let stateCopy = Object.assign({}, state);

    stateCopy.favJokes =  state.favJokes.map((o)=>{
      return JSON.stringify(o)}).filter( (ob) =>{
        return ob !== JSON.stringify(action.joke)
       }).map((j)=>{
        return JSON.parse(j)
       })
      return stateCopy

  }

 default:
    return state;
    }}


export default appReducer