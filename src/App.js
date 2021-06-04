import {useState, useEffect} from 'react'
import './App.css';


const App = () => {


	let dataTime // Definimos variable para manejar los ms

	const [date, setDate] = useState(new Date());  // date servira para almacenar las fechas
	const [seconds, setSeconds] = useState(1000);  // seconds almacenara los intervalos de ms

	// Creamos useEffect para no generar bucle infinito
	useEffect(() => {
		const myInterval = setInterval(() => {setDate(new Date())}, seconds);
		console.log('hello');
		return () => clearInterval(myInterval);
	}, [seconds]);

	const handleTimeInput = (event) => {
		dataTime = parseInt(event.target.value);
		console.log (dataTime);
	}

	const handleSubmit = () =>{	
		setSeconds(dataTime)
	}

  return (
    <div className="App">
      <header className="App-header">

	  	<h1>Hora actual: {date.toLocaleTimeString()}</h1>
		  <input onBlur={handleTimeInput}></input>
		  <button onClick={handleSubmit}>Aplicar Intervalo</button>
		  
      </header>
    </div>
  );
}

export default App;
