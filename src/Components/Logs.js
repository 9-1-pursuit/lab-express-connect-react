import { useState, useEffect } from "react";
import Log from "./Log";
import axios from "axios";
const API = process.env.REACT_APP_API_URL

function Logs() {
  const [logs, setLogs] = useState([]);
  
  useEffect(() => {
      axios
      .get(`${API}/logs`)
      .then((res) => setLogs(res.data))
      .catch(err => console.error())
    }, []);
    
    console.log(logs)

  return (
    <div className="Logs">  
        <h3>Captian Name</h3>
            {logs.map((log, index) => {
              return (
                  <>
                  {log.captainName}
                        <Log key={index} log={log} index={index} />;
                </>
              )
            })}
    </div>
  );
}

export default Logs;