import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
console.log(API);
export default function Logs() {
  const [logs, setLogs] = useState([]);

  // USEEFFECT
  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((res) => {
        console.log(res.data);
        setLogs(res.data);
      })
      .catch((error) => console.log("catch", error));
  }, []);
  return (
    <div className="Logs">
      {logs.map((log, index) => {
        return (
          <div key={index}>
            <h3>
              {log.title} - by {log.captainName}{" "}
            </h3>
            <p>{log.post}</p>
            <p>
              <b>Days since last criris:</b> {log.daysSinceLastCrisis}
            </p>
          </div>
        );
      })}
    </div>
  );
}
