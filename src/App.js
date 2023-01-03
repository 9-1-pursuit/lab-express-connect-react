import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Logs from "./Components/Logs";
import LogDetails from "./Components/LogDetails";
import LogEdit from "./Components/LogEdit";
import LogNew from "./Components/LogNew";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return(
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Logs />}/>
            <Route path="/logs/:index" element={<LogDetails />}/>
            <Route path="/logs/:index/edit" element={<LogEdit />}/>
            <Route path="/logs/new" element={<LogNew />}/>
            <Route path="*"/>
          </Routes>
        </main>
      </Router>
    </div>

  )
}

export default App;
