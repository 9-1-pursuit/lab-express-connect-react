import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Logs from './Components/Logs';
import New from './Components/LogsNew';
import LogsEditForm from './Components/LogsEditForm';
import LogsDetails from './Components/LogsDetails';
import Error from './Components/Error';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/logs" element={<Logs />}></Route>
          <Route path="/logs/new" element={<New />}></Route>
          <Route path="/logs/:index" element={<LogsDetails />}></Route>
          <Route path="/logs/:index/edit" element={<LogsEditForm />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
