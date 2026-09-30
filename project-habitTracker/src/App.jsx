import Header from "./components/Header"
import Tasks from "./components/Tasks"

const App = () => {
  return (
    <div className="bg-black w-full h-screen p-4">
      <Header />
      <Tasks />
    </div>
  )
}

export default App