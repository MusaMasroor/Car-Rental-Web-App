import Navbar from "./components/navbar.tsx";
import AddToDo from "./components/addToDo.tsx";
import Todos from "./components/todos.tsx";
import "./App.css"

const App = () => {
  return (
   <main>
      <h1>TODO REACT + TYPESCRIPT </h1>
      <Navbar />
      <AddToDo />
      <Todos />
   </main>
  )
}

export default App