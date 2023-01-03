import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogNewForm() {
  const navigate = useNavigate();
  const [log, setLog] = useState({
    name: "",
    url: "",
    category: "",
    isFavorite: false,
    description: "",
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, isFavorite: !log.isFavorite });
  };
  
  const addLog = (newlog) => {
    axios
    .post(`${API}/logs`, newlog)
    .then(
    () => {
    navigate(`/logs`);
    })
    .catch((c) => console.error("catch", c));
   };
   
  const handleSubmit = (event) => {
    event.preventDefault();
    addLog()
  };
  return (
    <div className="New Log" >
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          type="text"
          value={log.captainName}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="What happened today?"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>
      <Link to={"/logs"}>
            <button>Delete</button>
          </Link>
    </div>
  );
}

export default LogNewForm;
