import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Log(){
  const [log, setLog] = useState({});
  const { index } = useParams();
  const navigate = useNavigate();
  const API = `${API}/logs/${index}`;

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setLog(res.data))
      .catch((err) => console.log(err));
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(API)
      .then(() => {
        navigate("/logs");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="log">
      <h2>Show</h2>
      {log.title}
      <section className="button">
        <Link to={`${API}`}>Back</Link>
        <Link to={`/logs/${index}/edit`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </section>
    </div>
  );
}
