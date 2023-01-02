import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;
export default function LogsEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: '',
    title: '',
    post: '',
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });
  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  function checkbox() {
    setLog({
      ...log,
      mistakesWereMadeToday: !log.mistakesWereMadeToday,
    });
  }
  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setLog(res.data))
      .catch((err) => console.log(err));
  }, [index]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/logs/${index}`, log)
      .then((res) => {
        setLog(res.data);
        navigate(`/logs/${index}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="captainName"
          type="text"
          value={log.captainName}
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={log.title}
          onChange={handleTextChange}
          placeholder="title"
          required
        />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          value={log.post}
          onChange={handleTextChange}
          placeholder="post"
          required
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="daysSinceLastCrisis"
          required
        />
        <label htmlFor="checkbox">Mistakes</label>
        <input
          checked={log.mistakesWereMadeToday}
          type="checkbox"
          id="mistakesWereMadeToday"
          onChange={checkbox}
        ></input>
        <input type="submit"></input>
      </form>
      <Link to={`/logs/${index}`}>
        <button>Go Back</button>
      </Link>
    </div>
  );
}
