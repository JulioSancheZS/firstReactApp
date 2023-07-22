import {createContext, useState, useEffect} from 'react'
import { task as data } from "../data/task";

// Contexto

export const TaskContext = createContext();
export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  }, [])
  

  function createNewTask (task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description:  task.description
    }])
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(x => x.id !== taskId))
  }
    
  return (
        <TaskContext.Provider value={{
          tasks: tasks,
          deleteTask: deleteTask,
          createNewTask: createNewTask
        }}>
            {props.children}
        </TaskContext.Provider>
  )
}

export default TaskContext