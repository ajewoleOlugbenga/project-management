import { useContext } from "react";
import NewTask from "./NewTask";
import { ProjectCtx } from "../store/Project-context";

const Task = () => {

  const { deleteTasks,tasks } = useContext(ProjectCtx)

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-stone-700">TASKS</h2>
      <NewTask />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any task yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100 ">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => deleteTasks(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Task;
