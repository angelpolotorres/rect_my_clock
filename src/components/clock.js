import {useState, useEffect} from 'react'

const Clock = (props) => {

	const [date, setDate] = useState(new Date());
	useEffect(() => {
		setInterval(() => setDate(new Date()), props.interval)
	}, []);

	/* El useEffect hace que pasandole como segundo alemento un array vacio.
	Cuando se compara vacio con vacio no se ejecuta. Asi que se ejecuta la primera vez y luego no vuele 
	a ejecutar el setInterval. De manera que solo se queda ejecutendose el de la primera vez y solo renderiza 
	cada un segundo. Asi evitamos caer en un bucle exponencial de llamadas producida por ejecutar todo el rato 
	nuevos setInterval y estos a su vez generando nuevos new Dates */

	return <h1>Hora actual: {date.toLocaleTimeString()}</h1>
}

export default Clock