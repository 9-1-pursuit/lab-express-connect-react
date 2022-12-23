import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Logs from "../components/Logs";

const API = process.env.REACT_APP_API_URL;

export default function Index() {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => setLogs(response.data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Index</h2>
      <Logs logs={logs} />
    </div>
  );
}
