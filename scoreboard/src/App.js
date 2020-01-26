import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

export const addValue = value =>{
  return value + 1;
}



export const onHit = (x,y) =>{
  x(0);
  y(0);
}

function App() {
  const[balls, setBalls] = useState(0);
  const[strikes, setStrikes] = useState(0);
  const[outs, setOuts] = useState(0);
  const[inning, setInning] = useState(0);

  if(balls > 3){
      setBalls(0);
      setStrikes(0);
      setOuts(outs);
      
  }
  if(strikes > 2){
      setBalls(0);
      setStrikes(0);
      setOuts(addValue(outs));
  }
  if(outs > 2){
      setOuts(0);
      setStrikes(0);
      setBalls(0);
      setInning(addValue(inning));
  }


  return (
    <div className="App">
      <Display inning={inning} balls={balls} outs ={outs} strikes={strikes}/>
      <Dashboard setStrikes ={setStrikes} setBalls={setBalls} setOuts={setOuts} balls={balls} strikes={strikes} outs={outs}/>      
    </div>
  );
}

export default App;
