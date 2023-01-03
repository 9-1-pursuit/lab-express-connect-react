import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Log.css";
const API = process.env.REACT_APP_API_URL;

export default function Log() {
  const [log, setLog] = useState({});
  const { index } = useParams();
  const navigate = useNavigate();
  const indexAPI = `${API}/logs/${index}`;

  useEffect(() => {
    axios
      .get(indexAPI)
      .then((res) => setLog(res.data))
      .catch((err) => console.log(err));
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(indexAPI)
      .then(() => {
        navigate("/logs");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="log">
      <h2>Show</h2>
      {log.title && (
        <section>
          <h3>
            {log.title} - By <span>{log.captainName}</span>
          </h3>
          <p id="post">"{log.post}"</p>
          <p>
            <span>Mistakes Were Made Today: </span>
            {log.mistakesWereMadeToday === true ? "yes" : "no"}
          </p>
          <p>
            <span>Days since last crisis: </span>
            {log.daysSinceLastCrisis}
          </p>
        </section>
      )}
      <section className="buttons">
        <Link to="/logs">Back</Link>
        <Link to={`/logs/${index}/edit`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </section>
    </div>
  );
}
