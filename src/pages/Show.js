import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Log from "../components/Log";

const API = process.env.REACT_APP_API_URL;

export default function Show() {
  const [log, setLog] = useState({});
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => setLog(response.data))
      .catch(() => navigate("/not-found"));
  }, [index, navigate]);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Show</h2>
      {<Log log={log} index={index} />}
    </div>
  );
}
