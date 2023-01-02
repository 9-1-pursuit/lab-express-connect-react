import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function New() {
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
    return setLog({
      ...log,
      mistakesWereMadeToday: !log.mistakesWereMadeToday,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/logs`, log)
      .then((res) => {
        setLog(res.data);
        navigate(`/logs`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain's Name</label>
        <input
          id="captainName"
          type="text"
          value={log.captainName}
          onChange={handleTextChange}
          placeholder="Captain Name"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={log.title}
          onChange={handleTextChange}
          placeholder="Title"
          required
        />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          value={log.post}
          onChange={handleTextChange}
          placeholder="What happened today?"
          required
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes</label>
        <input
          checked={log.mistakesWereMadeToday}
          type="checkbox"
          id="mistakesWereMadeToday"
          onChange={checkbox}
        ></input>
        <input type="submit"></input>
      </form>
      <Link to={`/logs`}>
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default New;
