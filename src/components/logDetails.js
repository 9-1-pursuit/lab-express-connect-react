import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setLog(res.data))
      .catch((err) => navigate("/not-found"));
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate("/logs");
      })
      .catch((err) => console.log(err));
  };

  return (
    <article>
      <h5>
        <span>
          <a>{log.captainName}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {log.url}
      </h5>
      <h6>{log.title}</h6>
      <p>{log.post}</p>
      <div className="showNav">
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
