import { useContext, useState } from "react";
import { ProjectCtx } from "../store/Project-context";

const NewTask = () => {

  const { addTasks } = useContext(ProjectCtx)

  const [enteredTasks, setEnteredTask] = useState("");

  const handleChangeValue = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick= () => {
    if (enteredTasks.trim() === "") {
      return;
    }
    addTasks(enteredTasks)
    setEnteredTask(" ");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChangeValue}
        value={enteredTasks}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 "
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default NewTask;
