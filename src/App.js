import { Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Index />} />
        <Route path="/logs/:index" element={<Show />} />
        <Route path="/logs/new" element={"Create New Log Form"} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
