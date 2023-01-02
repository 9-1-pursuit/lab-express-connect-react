import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Log() {
  const [log, setLog] = useState({});
  const { index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setLog(res.data))
      .catch((err) => console.log(err));
  }, [index]);

  return (
    <div className="log">
      {log.title &&
        <section>
            <h2>{log.title}</h2>
            <p>{log.post}</p>
        </section>}
    </div>
  );
}
