import { useState } from 'react';
import './App.css';
import Clock from './components/clock.js'

function App() {

	let dataTime;
	const [time, setTime] = useState(1000);
	const handleTimeInput = (event) => {
		dataTime = parseInt(event.target.value);
	}
	const handleSubmit = () =>{
		setTime(dataTime)
	}

  return (
    <div className="App">
      <header className="App-header">
		  <Clock interval={time}></Clock>
		  <p>Intervalo</p>
		  <input onChange={handleTimeInput}></input>
		  <button onClick={handleSubmit}>Aplicar Intervalo</button>
      </header>
    </div>
  );
}

export default App;
