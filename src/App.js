// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/home.js";
import Index from "./pages/index.js";
import LogDetails from "./components/logDetails.js";
import NewLog from "./components/newLog.js";
import EditLog from "./components/editLog.js";
import Error from "./components/error.js";

// COMPONENT
import NavBar from "./components/navbar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/new" element={<NewLog />} />
            <Route path="/logs/:index" element={<LogDetails />} />
            <Route path="/logs/:index/edit" element={<EditLog />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
