import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import LogsIndex from "./Components/LogsIndex"
import ShowLog from "./Components/ShowLog";
import NewLog from "./Components/NewLog";
import UpdateLog from "./Components/UpdateLog";

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<LogsIndex />} />
          <Route path="/logs/new" element={<NewLog />} />
          <Route path="/logs/:index" element={<ShowLog />} />
          <Route path="/logs/:index/edit" element={<UpdateLog />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
