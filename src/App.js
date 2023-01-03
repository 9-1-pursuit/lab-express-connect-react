import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Index from "./pages/Index";
import Show from "./pages/Show";

import NavBar from "./components/NavBar";
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import New from "./pages/New";

function App() {
  
  return(
   <div className="App">
    <Router>
       <NavBar/>
       <main>
          <Routes>
            <Route path='/logs' element={<Index/>}/>
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs/new" element={<New />} />
            <Route path="/logs/:index/edit" element={<Edit />} />
            <Route path="/*" element={<FourOFour />} />

          </Routes>
        </main>
    </Router>
  </div>)
}

export default App;
