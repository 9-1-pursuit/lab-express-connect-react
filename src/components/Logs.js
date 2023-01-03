import { useEffect, useState } from "react";
import axios from "axios";
import Log from "./Log";

const API = process.env.REACT_APP_API_URL;

function Logs() {
  const [logs, setLogs] = useState([]);


useEffect(()=>{
  axios.get(`${API}/logs`)
  .then((res)=>{setLogs(res.data)})
  .catch(error=> console.log(error))
},[])

// console.log(log)

  return (
    <div className="logs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain Name</th>
              <th>See This Log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
                // console.log(log.title)
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;
