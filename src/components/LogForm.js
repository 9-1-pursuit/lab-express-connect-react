import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function LogsForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
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
    if (event.target.id === "daysSinceLastCrisis") {
      val = +event.target.value;
    }
    if (typeof event.target.value === "boolean") {
      val = !event.target.value;
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
      <h2>Logs Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Captain Name:
          <input
            id="captainName"
            type="text"
            value={log.captainName}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Title:
          <input
            id="title"
            type="text"
            value={log.title}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Post:
          <input
            id="post"
            type="text"
            value={log.post}
            onChange={handleChange}
            required
          ></input>
        </label>
        <label>
          Mistakes Were Made Today:
          <input
            type="checkbox"
            value={log.mistakesWereMadeToday}
            onChange={handleChange}
          />
        </label>
        <label>
          Days Since Last Crisis:
          <input
            id="daysSinceLastCrisis"
            type="text"
            value={log.daysSinceLastCrisis}
            onChange={handleChange}
            required
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
