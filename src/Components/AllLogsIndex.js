import { useState, useEffect } from "react";
import axios from "axios";
import Log from "./Log";
import "./AllLogsIndex.css";
const API = process.env.REACT_APP_API_URL;

const AllLogsIndex = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((res) => setLogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="allLogs">
      <h1>All Logs</h1>
      {logs.map((log, index) => {
        return <Log key={index} log={log} index={index} />;
      })}
    </div>
  );
};
export default AllLogsIndex;
