import { useState, useEffect } from "react";
import { Link, useParams, withRouter, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Container, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [log, setLog] = useState([]);

  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setLog(res.data);
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
      .catch((err) => console.error(err));
  };

  return (
    <article>
      <div className="logDetails">
        <h2>
          {log.title} - By {log.captainName}
        </h2>
        <p>{log.post}</p>
        <h6>Days since last crisis: {log.daysSinceLastCrisis}</h6>
      </div>
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
