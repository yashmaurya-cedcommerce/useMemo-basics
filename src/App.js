import { useMemo, useState } from 'react';
import './App.css';
import Inputs from './Inputs';

function App() {

  const [firstInput, setFirstInput] = useState();
  const [secondInput, setSecondInput] = useState();
  const [sum, setSum] = useState(null);
  const [active, setActive] = useState(false);

  var firstInputHandler=(event)=> {
    setFirstInput(event.currentTarget.value);
  }

  var secondInputHandler=(event)=> {
    setSecondInput(event.currentTarget.value);
  }

  var addInputs=(event)=> {
    setSum(parseInt(firstInput)+parseInt(secondInput));
  }

  var product=useMemo(()=> {
    console.log("Multiplication function running");
    return parseInt(firstInput)*parseInt(secondInput);
  }, [firstInput, secondInput, sum])

  var toggleEvent=(event)=> {
    setActive(!active);
  }

  return (
    <div className="App">
      
      <Inputs firstInputHandler={firstInputHandler} secondInputHandler={secondInputHandler} firstInput={firstInput} secondInput={secondInput} addInputs={addInputs} sum={sum} product={product} toggleEvent={toggleEvent} active={active} />



    </div>
  );
}

export default App;
