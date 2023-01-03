import React from "react"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./Components/OldHome.js"
import Logs from "./Components/Logs.js"
import NewLogForm from "./Components/NewLogForm.js"
import EditLogForm from "./Components/EditLogForm.js"
import ShowOneLog from "./Components/ShowOneLog.js"
import ErrorPage from "./Pages/Error.js"


function App() {

  return (
  
  <div className="log-app">
 
<Router>
  <Nav/>  
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/logs" element={<Logs />} />
    <Route path="/logs/:id" element={<ShowOneLog />} />
    <Route path="/logs/new" element={<NewLogForm />} />
    <Route path="/logs/edit" element={<EditLogForm />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
</Router>
    </div>
  )
}

export default App;
