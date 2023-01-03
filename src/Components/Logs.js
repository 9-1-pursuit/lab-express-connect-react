import { useState, useEffect } from "react";
import Log from "./Log";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Logs() {
 const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((res) => setLogs(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="Logs">
      <section>
        <h3>Captain Name</h3>
        {logs.map((log, index) => {
          return <h4 key={index}>{log.captainName}</h4>;
        })}

        <h3>See this Log</h3>

        {logs.map((log, index) => {
          return <Log key={index} log={log} index={index} />;
        })}
      </section>
    </div>
  );
}

export default Logs;
