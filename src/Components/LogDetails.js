import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LogDetails.css";
const API = process.env.REACT_APP_API_URL;

const LogDetails = () => {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setLog(res.data))
      .catch((err) => console.error(err));
    //   .catch((err) => navigate("/not-found"));
  }, [index]);

  const deleteLog = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate("/logs");
        window.alert("Log successfully deleted.");
      })
      .catch((err) => {
        console.error(err);
        window.alert("Error, log not deleted.");
      });
  };

  return (
    <div className="logIndex">
      <h2>Log</h2>
      <p>Captain's Name: {log.captainName}</p>
      <p>Log Title: {log.title}</p>
      <p>Log: {log.post}</p>
      <p>Mistakes Made Today: {`${log.mistakesWereMadeToday}`}</p>
      <p> Days Since Last Crisis: {log.daysSinceLastCrisis}</p>
      <Link to="/logs">
        <button className="backBtn"> Back </button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <button className="editBtn"> Edit </button>
      </Link>
      <button onClick={deleteLog} className="deleteBtn">
        Delete
      </button>
    </div>
  );
};

export default LogDetails;
