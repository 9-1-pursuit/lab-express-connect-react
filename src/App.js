import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Index from "./components/Index";
import Show from "./components/Show";
import New from "./components/New";
import Edit from "./components/Edit";
import Delete from "./components/Delete";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logs" element={<Index />} />
          <Route path="/logs/new" element={<New />} />
          <Route path="/logs/delete" element={<Delete />} />
          <Route path="/logs/:index/id" element={<Show />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
