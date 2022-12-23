import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import AllLogsIndex from "./Components/AllLogsIndex";
import NewLogForm from "./Components/NewLogForm";
import LogDetails from "./Components/LogDetails";
import EditLogForm from "./Components/EditLogForm";
import FourOFour from "./Components/FourOFour";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/logs" element={<AllLogsIndex />} />
          <Route path="/logs/:index" element={<LogDetails />} />
          <Route path="/logs/new" element={<NewLogForm />} />
          <Route path="/logs/:index/edit" element={<EditLogForm />} />
          {/* <Route path="*" element={FourOFour} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
