import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

import NavBar from "./Components/NavBar";

import React from 'react'

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <main>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/logs" element={<Index />} />
           <Route path="/logs/new" element={<New />} />
           <Route path="/logs/:index" element={<Show />} />
           <Route path="/logs/:index/edit" element={<Edit />} />
           <Route path="*" element={<FourOFour />} />
          </Routes>
      </main>
    </Router>
  </div>
  )
}

export default App