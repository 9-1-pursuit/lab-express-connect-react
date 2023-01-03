import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogNewForm() {
  const navigate = useNavigate();

  const [log, setLog] = useState({
    name: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
    
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${API}/logs/`, log)
      .then(() => navigate("/logs"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain's name:</label>
        <input
          id="name"
          type="text"
          value={log.name}
          placeholder=""
          onChange={handleTextChange}
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={log.title}
          placeholder=""
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder=""
          onChange={handleTextChange}
        />

        <label htmlFor="daysSinceLastCrisis">Days Since Last Crises: </label>
       <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          placeholder=""
          onChange={handleTextChange}
        />

        <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default LogNewForm;
