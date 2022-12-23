import { useState , useEffect} from "react";
import Log from "./Log";
import axios from "axios";

const API = process.env.REACT_APP_API_URL

function Logs(){
   const [logs , setLogs] = useState([])

   useEffect(()=> {
    axios.get(`${API}/logs`)
    .then((res) => setLogs(res.data))
    .catch(err => console.log(err))
    }, [])

 return(
  <div>
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
          <body className="captains-table">
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </body>
        </table>
      </section>
    </div>
 )

}

export default Logs