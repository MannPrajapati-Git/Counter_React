import { useState } from "react";

function App() {


  const addValue=()=>{
      c=c+1;
      console.log("the add button is clicked and value : ",c);
      setC(c);
    
  }
  const decreaseValue=()=>{
    if(c>0){

      c=c-1;
      console.log("the descrease button is clicked and value :",c);
      setC(c);
    }
  }
  const resetValue=()=>{
   
      c=0;
      console.log("the reset button is clicked and value :",c);
      setC(c);
   
  }

  let [c,setC] = useState(0)
 
  return (
    <>
      <h1>This Is Basic Counter Project</h1>
      <h2>Build my MannSir</h2>

      <br />

      <h3>Counter Value : {c} </h3>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease value</button>
      <br />
      <br />
      <button onClick={resetValue}>Reset Value</button>

    </>
  )
}

export default App
