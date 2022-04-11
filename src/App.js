import React, { useEffect, useState } from "react";
import icon from "./asset/images/icon.png";
import TitleComp from "./components/sharedComp/TitleComp";
import { values } from "./helper/textValues";
import "./App.css";
import StepComp from "./components/StepComp";
import Launch from "./components/Launch";

function App() {
  const steps = [1, 2, 3, 4];
  const [active, setActive] = useState(-1);
  const change =()=>{
    setActive(prev=>prev+1);
  }
  useEffect(()=>{

  },[active])
  return (
    <div className="App">
      <div className="header">
        <div className="logo__div">
          <img src={icon} className="logo__img" />
          <h2 className="title">Eden</h2>
        </div>
      </div>
      <div className="stepper-comp">
        <StepComp steps={steps} active={active+1} />
      </div>
      <div className="main">
       {[-1,0,1].includes(active)?
        <TitleComp
          title={values[active+1].title}
          subtitle={values[active+1].subtitle}
          active={active}
          change ={change}
        />:<Launch change ={change}/>
        
        }
        
      </div>
    </div>
  );
}

export default App;
