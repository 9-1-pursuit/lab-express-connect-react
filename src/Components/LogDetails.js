import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const { index } = useParams();
  const [log, setLog] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => setLog(response.data))
      .catch(err => navigate("/not-found"))
  }, [index, navigate]);


  const deleteLog = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(
        () => {
          navigate(`/logs`);
        })
        .catch(err => console.log(err))
     };

  
 
  return (
    <>
    <article className="container-log-details">
      <h2>
      {log.mistakesWereMadeToday ? <span>⭐️</span> : null} {log.title} - By {" "}
      {log.captainName}
      </h2>
      <h4>{log.post}</h4>
      <h5>
        <span>Days Since Last Crisis: </span>
        {log.daysSinceLastCrisis}
      </h5>
      <p>{log.description}</p>
    </article>
    <div className="showNavigation">
        <>
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </>
        <>
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </>
        <>
          <button onClick={deleteLog}>Delete</button>
        </>
      </div>
    </>
    
  );
}

export default LogDetails;