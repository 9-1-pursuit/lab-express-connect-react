import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function NewLog() {
  const navigate = useNavigate();
  const [newLog, setNewLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (e) => {
    setNewLog({ ...newLog, [e.target.id]: e.target.value });
  };

  const checkBox = () => {
    setNewLog({
      ...newLog,
      mistakesWereMadeToday: !newLog.mistakesWereMadeToday,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/logs`, newLog)
      .then((res) => {
        setNewLog(res.data);
        navigate("/logs");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="captainName"
          type="text"
          value={newLog.captainName}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          type="text"
          value={newLog.title}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="post">Post: </label>
        <input
          id="post"
          type="text"
          value={newLog.post}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis: </label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={newLog.daysSinceLastCrisis}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="mistakes">Mistakes: </label>
        <input
          id="mistakes"
          type="checkbox"
          onChange={checkBox}
          checked={newLog.mistakesWereMadeToday}
        />
        <input type="submit" />
      </form>
      <Link to={`/logs`}>
        <button>Go Back</button>
      </Link>
    </div>
  );
}
