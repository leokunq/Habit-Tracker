import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { useState } from "react";



const App = () => {

  const [tasks, setTasks] = useState([]);


  function handleAddTask(taskName) {
    const newTask = {
      id: 1,
      name: taskName,
      completed: false,
    };

    setTasks(prevTasks => [...prevTasks, newTask]);
    console.log(newTask);
    
  }

  return (
    <div className="bg-black w-full h-screen p-4">
      <Header />
      <Tasks tasks={tasks} />
      <AddTasks onAddTask={handleAddTask}/>
    </div>
  );
};

export default App;
