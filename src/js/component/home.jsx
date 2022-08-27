import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea]=useState("")
	const [todos, setTodos]=useState([])
	//agregar tarea
	function submit(e){
		e.preventDefault()
		setTarea(e.target.value);
		console.log(tarea);
		setTodos([...todos, tarea]);
		setTarea("");
	}
	console.log(todos);
	function borrar(item){
		// usar filter
		console.log(item);
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
			<div>
				{todos.map((item,index)=><li key={index}> {item} <span onClick={()=>borrar(item)}>  X </span></li>)}
			</div>
		</div>
	);
};

export default Home;
