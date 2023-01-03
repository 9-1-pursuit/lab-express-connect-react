// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// PAGES
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Index from "./Pages/Index";
import Edit from "./Pages/Edit";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";
import "./App.css"

function App() {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = () => {
    if (theme === "Dark") {
      setTheme("Light");
    } else {
      setTheme("Dark");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme}`}>
      <Router>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/new" element={<New />} />
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs/:index/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
