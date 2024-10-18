import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"

const App = () => {
  document.title = "MovieApp"
  return (
    <div className="w-screen h-screen flex bg-zinc-900">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
