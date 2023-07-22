import TaskForms from "./components/TaskForms"
import TaskList from "./components/TaskList"

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForms></TaskForms>
        <TaskList></TaskList>
      </div>
    </main>
  )
}

export default App
