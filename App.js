import React, { useState } from 'react';

const App = () => {

const [result, setResult] = useState("");

const handleclick = (e) => {

setResult (result.concat(e.target.name));
}

const clear = () => {
  setResult=('');
}

const backspace = () =>
 {
 setResult(result.slice(0, result.length - 1));
}

const calculate = () =>
   {

setResult(eval(result).toString());

}



  return (

<div className='wrapper'>

  <input type="text" value={result}/>


<div className="pad">

  <button name="clear" onClick={clear} id="clear"> C </button>
  <button name="backspace" onClick={backspace} id="backspace"> backspace </button><br/>
  <button name="1" onClick={handleclick}>1</button>
  <button name="2" onClick={handleclick}>2</button>
  <button name="3" onClick={handleclick}>3</button><br/>
  <button name="4" onClick={handleclick}>4</button>
  <button name="5" onClick={handleclick}>5</button>
  <button name="6" onClick={handleclick}>6</button><br/>
  <button name="7" onClick={handleclick}>7</button>
  <button name="8" onClick={handleclick}>8</button>
  <button name="9" onClick={handleclick}>9</button><br/>
  <button name="0" onClick={handleclick}>0</button>
  <button name="+" onClick={handleclick}>+</button><br/>
  <button name="-" onClick={handleclick}>-</button>
  <button name="/" onClick={handleclick}>/</button>
  <button name="*" onClick={handleclick}>*</button>
  <button name="=" onClick={calculate}>=</button>
  








</div>





</div>








  );
}

export default App;