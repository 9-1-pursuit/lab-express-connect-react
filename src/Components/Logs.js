import { useState, useEffect } from "react";
import axios from "axios";
import Log from "./Log";
const API = process.env.REACT_APP_API_URL;

export default function Logs() {
  console.log(API);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((res) => {
        console.log(res.data);
        setLogs(res.data);
      })
      .catch((err) => console.error("catch", err));
  }, []);
  return (
    <div className="logs">
      <section>
        <table className="table">
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>captain Name</th>
              <th>See this log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
