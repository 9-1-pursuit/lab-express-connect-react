import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, withRouter, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [log, setlog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setlog(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
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
        {log.mistakesWereMadeToday ? <span>⭐️</span> : null} {log.title} - By {log.captainName}
      </h3>
      <h5>
       {log.post}
      </h5>
      <h6>Days since last crisis: {log.daysSinceLastCrisis}</h6>
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
