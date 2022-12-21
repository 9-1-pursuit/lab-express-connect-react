import { useState, useEffect } from "react";
import Log from "./log.js";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Logs() {
  //   console.log(API);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((res) => setLogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="logs">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this Log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} Log={Log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
