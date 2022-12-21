import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar.js";
import Home from "./pages/home.js";
import Index from "./pages/index.js";
import Show from "./pages/show.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/:index" element={<Show />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
