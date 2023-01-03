import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function EditLog() {
  let { index } = useParams();
  let navigate = useNavigate();

  const [editLog, setEditLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (e) => {
    setEditLog({ ...editLog, [e.target.id]: e.target.value });
  };

  const checkBox = () => {
    setEditLog({
      ...editLog,
      mistakesWereMadeToday: !editLog.mistakesWereMadeToday,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/logs/${index}`, editLog)
      .then((res) => {
        setEditLog(res.data);
        navigate(`/logs/${index}`);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setEditLog(res.data))
      .catch((err) => navigate("/not-found"));
  }, [index]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="captainName"
          type="text"
          value={editLog.captainName}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          type="text"
          value={editLog.title}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="post">Post: </label>
        <input
          id="post"
          type="text"
          value={editLog.post}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis: </label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={editLog.daysSinceLastCrisis}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="mistakes">Mistakes: </label>
        <input
          id="mistakes"
          type="checkbox"
          onChange={checkBox}
          checked={editLog.mistakesWereMadeToday}
        />
        <input type="submit" />
      </form>
      <Link to={`/logs/${index}`}>
        <button>Go Back</button>
      </Link>
    </div>
  );
}