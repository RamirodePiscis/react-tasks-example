import { useState, useContext } from "react"
import { TaskContex } from "../context/TaskContex";

export default function TaskForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { createTask } = useContext(TaskContex)

    const handleSubmit = (e) => {
        e.preventDefault(); // cancela el comportamiento por defecto
        createTask({
            title,
            description
        })
        setTitle('');
        setDescription('');
    }

  return (
    <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
            <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
            <input type="text" placeholder="Escribe tu tarea"
            onChange={(e) => setTitle(e.target.value)} 
            value={title} autoFocus className="bg-slate-300 p-3 w-full mb-2" /> <br /> <br />
            <textarea placeholder="Escribe la descripcion de la tarea"
            onChange={(e) => setDescription(e.target.value)}
            value={description} className="bg-slate-300 p-3 w-full mb-2">
            </textarea>
            <button className="bg-lime-500 px-3 py-1 text-white rounded-md">
                Guardar
            </button>
        </form>
    </div>
  )
}
