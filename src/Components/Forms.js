import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function LogsForm() {
  const { index } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
  });

  useEffect(() => {
    if (index !== undefined) {
      axios
        .get(`${API}/logs/${index}`)
        .then((res) => setLog(res.data))
        .catch((err) => console.log(err));
    }
  }, [index]);

  const handleChange = (event) => {
    let val = event.target.value;
    setLog({ ...log, [event.target.id]: val });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (index !== undefined) {
      axios
        .put(`${API}/logs/${index}`, log)
        .then(() => navigate(`/logs/${index}`))
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`${API}/logs`, log)
        .then(() => navigate("/logs"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="form">
      <h2>Log Form</h2>
      <h3>{index ? "Edit" : "New"}</h3>
      <form onSubmit={handleSubmit}>
    <label htmlFor="captainName">Captain's Name:</label>
    <input
    id="captainName"
    type="text"
    value={log.captainName}
    onChange={handleChange}
    required></input>

    <label htmlFor="title">Title:</label>
    <input
     id="title"
     type="text"
     value={log.title}
     onChange={handleChange}
     required></input>

    <label htmlFor="post">Post:</label>
    <textarea
     id="post"
     value={log.post}
     onChange={handleChange}
     required></textarea>

      <input id="submit" type="submit" />
      </form>
      <br />
      <Link to="/logs">Back</Link>
    </div>
  );
}