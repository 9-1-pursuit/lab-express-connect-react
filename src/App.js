import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Index from "./components/Index";
import Show from "./components/Show";
import New from "./components/New";
import Edit from "./components/Edit";
import Delete from "./buttons/Delete";
// import FourOFour from "./components/FourOFour";

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
          <Route path="/logs/:index" element={<Show />} />
          <Route path="/logs/:index/edit" element={<Edit />} />
          {/* <Route path="*" element={<FourOFour />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
