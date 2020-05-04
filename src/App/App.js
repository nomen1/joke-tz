import React from "react";
import s from  "./App.module.css";
import useMediaQuery from "./../useMediaQueries"
import Media from "react-media"
import MainSide from "../mainSide/MainSide"
import FivSide from "../FavSide/FavSide"








const App = () => {


  const xs = useMediaQuery("(max-width: 599px)");
  const m =  useMediaQuery("(min-width: 600px) and (max-width: 1199px)");
  const md =  useMediaQuery("(min-width: 1200px)");
 

  
 


  return ( 

  
<div className="App">{xs && <div className = {s.appContainer}> <MainSide/></div>}
              {m && <div className = {s.appContainer}> <MainSide/></div>}
              { md && <div className = {s.appContainer}> <MainSide/> <FivSide/></div>};

        


    
  </div>
  );
};


export default App