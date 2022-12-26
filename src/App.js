import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import New from "./components/New";
import Delete from "./components/Delete";
import Index from "./components/Index";
import Edit from "./components/Edit";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/logs" element={<Home />} />
          <Route path="/logs/new" element={<New />} />
          <Route path="/logs/delete" element={<Delete />} />
          <Route path="/logs/:index" element={<Index />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
