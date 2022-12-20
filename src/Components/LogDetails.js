import { useState, useEffect } from "react";
import { Link, useParams , useNavigate} from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL

function LogDeatails(){
    const [logs , setLogs] = useState([]);
    let navigate = useNavigate()
    let { index } = useParams();


    function handleDelete(){
      axios.delete(`${API}/logs/${index}`)
        .then(() => {
          navigate(`/logs`);
        })
        .catch((err) => console.error(err));
     }
    


    useEffect(() => {
        axios.get(`${API}/logs/${index}`)
        .then(res => setLogs(res.data))
      }, [index , navigate]);

     return(
        <article>
         <div className="details">
        <h1>Show</h1>
        <h2>
          {logs.title} - By {logs.captainName}
        </h2>
        <h3>{logs.post}</h3>
        <p><span>Days since last crisis:</span> {logs.daysSinceLastCrisis}</p>
         </div>
        <div className="buttons">
            <div>
                <Link to={"/logs"}>
                    <button>Back</button>
                </Link>
            </div>
            <div>
                <Link to={`/logs/${index}/edit`}>
                    <button>Edit</button>
                </Link>
            </div>
            <div>
        
          <button onClick={handleDelete}>Delete</button>
              
            </div>
        </div>

      </article>
     )

}

export default LogDeatails