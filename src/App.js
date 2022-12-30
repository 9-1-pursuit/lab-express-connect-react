import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Home from "../Components/NavBar";
import Logs from "../Components/NavBar";
import LogDetails from "../Components/NavBar";
import LogEdit from "../Components/NavBar";
import LogNew from "../Components/NavBar";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="Routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/logs/:index" element={<LogDetails />} />
            <Route path="/logs/:index/edit" element={<LogEdit />} />
            <Route path="/logs/new" element={<LogNew />} />
            <Route path="*" />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
