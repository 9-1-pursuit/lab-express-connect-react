import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios"
const API = process.env.REACT_APP_API_URL

function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then(res => setLog(res.data))
      .catch(err => navigate("/not-found"))

  }, [index, navigate]);



  const handleDelete = () => {
    axios
    .delete(`${API}/logs/${index}`)
    .then(() => {
      navigate(`/logs`);
    })
    .catch(err => console.log(err));
  };
  return (
    <article>
      <h3>
        {/* {log.mistakesWereMadeToday ? <span>⭐️</span> : null*/} 
        {log.title} - By {log.captainName} 
      </h3>
      <h4>{log.post}</h4>
   
      <h5>Days since last crises:<span>{log.daysSinceLastCrisis}</span></h5>
     
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default LogDetails;