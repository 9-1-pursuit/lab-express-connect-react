import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './New.css'

const API = process.env.REACT_APP_API_URL;

function New() {
  const navigate = useNavigate();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: "",
    mistakesWereMadeToday: false,
  });
  const handleTextChange = (e) => {
    setLog({ ...log, [e.target.id]: e.target.value });
  };
  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/logs/`, log)
      .then(() => {
        navigate("/logs");
      })
      .catch((error) => console.log("Warning", error));
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain Name</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter a Name..."
          required
        ></input>

        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={log.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter a title..."
          required
        ></input>

        <label htmlFor="post">Post</label>
        <input
          id="post"
          value={log.post}
          type="text"
          onChange={handleTextChange}
          placeholder="Enter a post..."
          required
        ></input>

        <label htmlFor="daysSinceLastCrisis">Days since last crisis </label>
        <input
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          type="number"
          onChange={handleTextChange}
          placeholder="Enter a number"
          required
        ></input>
        <label htmlFor="checkbox">Mistakes were made today:</label>
        <input
          type="checkbox"
          id="mistakesWereMadeToday"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <input type="submit" />
      </form>
      <button
        onClick={() => {
          navigate(`/logs/`);
        }}
      >
        Back!
      </button>
    </div>
  );
}

export default New;
