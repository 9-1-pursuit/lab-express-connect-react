import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate("/logs");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setLog(res.data))
      .catch((err) => navigate("/not-found"));
  }, [index, navigate]);

  return (
    <article className="details">
      <div className="namecard">
        <h2>
          {log.title} - By {log.captainName}
        </h2>
        <h3>{log.post}</h3>
        <p>
          <span>Days since last crisis:</span> {log.daysSinceLastCrisis}
        </p>
      </div>
      <br></br>

      <div className="buttons">
        <div>
          <Link to={"/logs"}>
            <button className="capButtons">Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/logs/${index}/edit`}>
            <button className="capButtons">Edit</button>
          </Link>
        </div>
        <div>
            <Link to={`/logs`}>
                <button className="capButtons" onClick={handleDelete}>
                Delete
                </button>
            </Link>
        </div>
      </div>
    </article>
  );
}