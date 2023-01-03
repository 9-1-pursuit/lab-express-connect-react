import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  

  useEffect(() => {
    axios
    .get(`${API}/logs/${index}`)
    .then((response) => {
      setLog(response.data);
    })
    .catch(() => {navigate('/not-found')});
  }, [index, navigate]);


  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  };
  return (
    <article>
      <h3>
        {log.mistakesWereMadeToday ? <span>💥</span> : null} {log.captainName}
      </h3>
      <h5>
        {log.title} - By {log.captainName}
      </h5>
      <h6>{log.post}</h6>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      <div className="showNavigation">
        <div className="log">
          <Link to={`/logs`}>
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
  );
}

export default LogDetails;
