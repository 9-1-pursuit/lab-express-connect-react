import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogsDetails from './LogsDetails';
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
        {logs.map((log, index) => {
          return (
            <div>
              <Link to={`/logs/${index}`}>{log.captainName}</Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
