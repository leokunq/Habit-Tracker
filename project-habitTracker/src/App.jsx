import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";

const App = () => {
  return (
    <div className="bg-black w-full h-screen p-4">
      <Header />
      <Tasks />
      <AddTasks />
    </div>
  );
};

export default App;
