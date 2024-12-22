import React, { useState } from "react";

const Home = () => {
    const [listaTareas, setListaTareas] = useState([]);
    const [tarea, setTarea] = useState("");

    //  agregar tareas
    const agregarTarea = (e) => {
        if (e.key === "Enter" && tarea !== "") {
            setListaTareas([...listaTareas, tarea]);
            setTarea(""); 
        }
    };

    //eliminar una tarea
    const eliminarTarea = (index) => {
        const nuevasTareas = listaTareas.filter((_, i) => i !== index);
        setListaTareas(nuevasTareas);
    };

    return (
        <div className="container mt-5">
            <h1>Mi lista de tareas</h1>
            <input
                type="text"
                onChange={(e) => setTarea(e.target.value)}
                value={tarea}
                placeholder="Escribe una tarea"
                onKeyDown={agregarTarea} 
            />
            <ul className="list-group mt-3">
                {listaTareas.map((tarea, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between">
                        {tarea}
                        <button 
                            className="btn btn-danger btn-sm" 
                            onClick={() => eliminarTarea(index)}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
