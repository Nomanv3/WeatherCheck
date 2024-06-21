import React, { useEffect, useState } from "react";
import Splash from "./Components/Splash";
import Hero from "./Components/Hero";

const App = () => {
  const [splash, setsplash] = useState(false);

  useEffect(() => {
    setsplash(true);
    let timer = setTimeout(() => {
      setsplash(false)
    }, 2000);

    return()=>{
      clearTimeout(timer)
      
    }
  },[]);

  return <div>{splash ? <Splash /> : <Hero/>}</div>;
};

export default App;
