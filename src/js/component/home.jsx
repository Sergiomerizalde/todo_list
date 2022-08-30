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

	function borrar(elemento){
		// usar filter
		let borrado = todos.filter((item, index)=>{
			if(elemento !== index){
				return item; 
			}
		})
		setTodos(borrado);
		console.log(elemento);
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
				{todos.map((item,index)=><li key={index}> {item} <span onClick={()=>borrar(index)}>  X </span></li>)}
			</div>
			<p>Tenemos {todos.length>0 ? todos.length:"no hay tareas"} tareas</p>
		</div>
	);
};

export default Home;
