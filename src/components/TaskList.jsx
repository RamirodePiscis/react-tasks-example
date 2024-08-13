import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContex } from "../context/TaskContex";


export default function TaskList() {
  const {tasks} = useContext(TaskContex)

  if(tasks.length === 0){
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>
  }

  return (
    <div className="grid grid-cols-4 gap-2">
        {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
        ))}
    </div> 
  );
}
