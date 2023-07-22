import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForms() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createNewTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask({
      title,
      description,
    });

    setDescription("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4">
        <h3 className="text-2xl text-white font-bold mb-2">Crea tu Tarea</h3>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        ></input>

        <textarea
          placeholder="Escribe la descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-600 px-3 text-white py-1 rounded-sm hover:bg-indigo-400" onClick={handleSubmit}>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForms;
