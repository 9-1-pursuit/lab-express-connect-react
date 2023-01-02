import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogsDetails from './LogsDetails';
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
    </div>
  );
}
