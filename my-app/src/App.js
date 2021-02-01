import './App.css';
import Home from "./Home";
import Fourtest from "./Fourtest"
import {useState} from 'react';

function App() {
 let fourtestObj = {
text1: "the first text"
 }
  const personObj = {
     name: "david",
    city: "beer_sheva",
    love: "music",
    age: 20
  } 
  // name = "david" city = "beer_sheva" love = "music" age = {20}
  let [counter, setCounter] = useState(0);
  let [inpUp, setInp] = useState(1)

  function goUp(){
    setCounter(oldValue => oldValue+inpUp);
  }

  function reset(){
    setCounter(0)
  }

  function handelChangeInpUp(e){
    setInp(Number(e.target.value));
  }
  return (
    <div className="App">

      <Home {...personObj}/>
      <label>
        increase by:
        <input type="number" value={inpUp} onChange={handelChangeInpUp}/>
      </label>
      <p>
        I was clicked {counter} times
        <button onClick={goUp}>Click Me</button>
        <button onClick={reset}>Clear</button>
      </p>
      <Fourtest/>
      <Fourtest text2 = "the second text" {...fourtestObj} imgfourtest= './imges/ball.jpg' bgcolors = 'lightblue'/>
    </div>
  );
}

export default App;
