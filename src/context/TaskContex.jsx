import { createContext, useState, useEffect } from "react"
import { tasks as data } from "../data/tasks";
// Esta f() va retornarme un objeto
export const TaskContex = createContext()

export default function TaskContexProvider(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data)
    }, [])

    function createTask(task) {
        setTasks([...tasks, {
          title: task.title,
          id: tasks.length,
          description: task.description
        }])
    }

    function deleteTask(taskId){
        setTasks(tasks.filter(task => task.id !== taskId))
    }

  return (
    <TaskContex.Provider value={{
        tasks,
        deleteTask,
        createTask
    }}>
        {props.children}
    </TaskContex.Provider>
  )
}
