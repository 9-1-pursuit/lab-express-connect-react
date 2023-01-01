import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

//*
const API = process.env.REACT_APP_API_URL;
//
export default function Log() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setLog(res.data);
      })
      .catch((err) => navigate("/not-found"));
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  };

  return (
    <article>
      <h3>
        {log.captainName} - {log.title}
      </h3>
      <p>
        <b>Post:</b>
        {log.post}
      </p>
      <p>
        <b>Days sincelast Crisis:</b> {log.daysSinceLastCrisis}
      </p>
      <div className="Button">
        {" "}
        <Link to={"/logs"}>
          {" "}
          <button>Back</button>{" "}
        </Link>
        <button
          onClick={() => {
            navigate(`/logs/${index}/edit`);
          }}
        >
          Edit
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
}
