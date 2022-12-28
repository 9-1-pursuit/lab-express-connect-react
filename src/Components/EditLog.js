import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function EditLog() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: "",
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setLog(res.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/logs/${index}`, log)
      .then((res) => {
        setLog(res.data);
        navigate(`/logs/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <br/>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="captain Name"
          required
        />
        <br/>
        <label htmlFor="title">Title:</label>
        <br/>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          placeholder="title"
          onChange={handleTextChange}
        />
        <br/>
        <label htmlFor="post">Post:</label>
        <br/>
        <textarea
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="What happened today?"
          onChange={handleTextChange}
        />
        <br/>
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <br/>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleCheckboxChange}
          checked={log.daysSinceLastCrisis}
        />
        <br/>
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <br/>
        <input
          id="mistakesWereMadeToday"
          name="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleTextChange}
        />
        <br />
        <br/>
        <input type="submit" />
      </form>
      <Link to={`/logs/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default EditLog;
