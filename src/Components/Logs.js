import { useState, useEffect } from 'react';
import Log from './Log';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((res) => {
        console.log(res);
        setLogs(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={log.id} log={log} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
