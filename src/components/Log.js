import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

  const handleBack = () => {
    navigate("/logs");
  };

  const handleEdit = () => {
    navigate(`/logs/${index}/edit`);
  };

  const handleDelete = () => {
    axios
      .delete(indexAPI)
      .then(() => {
        navigate("/logs");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Log">
      {log.title && (
        <section>
          <h2>
            {log.title} - by <span>{log.captainName}</span>
          </h2>
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
        <button onClick={handleBack}>Back</button>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </section>
    </div>
  );
}
