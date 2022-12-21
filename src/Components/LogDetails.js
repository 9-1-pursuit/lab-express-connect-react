import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./LogDetails.css";
// import AllLogsIndex from "./AllLogsIndex";
const API = process.env.REACT_APP_API_URL;

const LogDetails = () => {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  //   let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setLog(res.data))
      .catch((err) => console.error(err));
    //   .catch((err) => navigate("/not-found"));
  }, [index]);
  console.log(log);

  return (
    <div className="logIndex">
      <h2>Log</h2>
      <p>Log Title: {log.title}</p>
      <p>Log: {log.post}</p>
      <p>Mistakes Made Today: {`${log.mistakesWereMadeToday}`}</p>
      <p> Days Since Last Crisis: {log.daysSinceLastCrisis}</p>
    </div>
  );
};

export default LogDetails;
