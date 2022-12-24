import { Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Show from "./pages/Show";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logs" element={<Index />} />
        <Route path="/logs/:index/edit" element={<Edit />} />
        <Route path="/logs/new" element={<New />} />
        <Route path="/logs/:index" element={<Show />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
