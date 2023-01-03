import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./LogForm.css";
const API = process.env.REACT_APP_API_URL;

export default function LogsForm() {
  const { index } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
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
    if (event.target.id === "mistakesWereMadeToday") {
      val = !log.mistakesWereMadeToday;
    }
    if (event.target.id === "daysSinceLastCrisis" && val) {
      val = Number(val);
    }
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
          required
        ></input>

        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={log.title}
          onChange={handleChange}
          required
        ></input>

        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          value={log.post}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          value={log.mistakesWereMadeToday}
          onChange={handleChange}
        />

        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleChange}
          required
        />

        <input id="submit" type="submit" />
      </form>
      <br />
      <Link to="/logs">Back</Link>
    </div>
  );
}
