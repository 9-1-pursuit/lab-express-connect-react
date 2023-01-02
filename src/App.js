import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';

//pages
import Error from './Components/Error';
import Edit from './Pages/Edit';
import HomePage from './Pages/Home';
import Index from './Pages/Index';
import New from './Components/LogsNew';
import Show from './Pages/Show';
import LogsDetails from './Components/LogsDetails';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/logs" element={<Index />}></Route>
          <Route path="/logs/:index" element={<LogsDetails />}></Route>
          <Route path="/logs/new" element={<New />}></Route>
          <Route path="/logs/:index/edit" element={<Edit />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
