import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea]=useState("")
	const [todos, setTodos]=useState([])
	function submit(e){
		e.preventDefault()
		setTarea(e.target.value);
		console.log(tarea);
		setTarea("");
		// setTodos a lo que es set tareas con concat o push
	}
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Todo List</h1>
			<form className="container" onSubmit={submit}>
			<input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Tu correo aquí"
			onChange={(e)=>setTarea(e.target.value)}
			value={tarea}
          	/>
			</form>
		</div>
	);
};

export default Home;
