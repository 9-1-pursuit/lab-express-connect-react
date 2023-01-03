import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const NewLogForm = () => {
  let navigate = useNavigate();

  // newLogInfo
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  //handles change for input textboxes
  const handleTextChange = (e) => {
    setLog({ ...log, [e.target.id]: e.target.value });
  };

  //handles number input daysSinceCrisis
  const numChange = (e) => {
    setLog({ ...log, daysSinceLastCrisis: Number(e.target.value) });
  };

  //mistakesWereMadeCheckbox HandleChange
  const handleCheckBoxChange = () => {
    setLog({
      ...log,
      mistakesWereMadeToday: !log.mistakesWereMadeToday,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/logs`, log)
      .then(() => navigate("/logs"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="newLog">
      <h1>Create New Log</h1>
      <form className="newLogForm" onSubmit={handleSubmit}>
        <label htmlFor="captainName">
          {" "}
          Captain Name:{" "}
          <input
            type="text"
            id="captainName"
            value={log.captainName}
            required
            onChange={handleTextChange}></input>
        </label>
        <label htmlFor="title">
          {" "}
          Title:{" "}
          <input
            type="text"
            id="title"
            value={log.title}
            required
            onChange={handleTextChange}></input>
        </label>
        <label htmlFor="post">
          {" "}
          Post:{" "}
          <input
            type="text"
            id="post"
            value={log.post}
            required
            onChange={handleTextChange}></input>
        </label>
        <label htmlFor="mistakesMadeToday">
          {" "}
          Mistakes Were Made Today:{" "}
          <input
            type="checkbox"
            id="mistakesMadeToday"
            checked={log.mistakesWereMadeToday}
            onChange={handleCheckBoxChange}></input>
        </label>
        <label htmlFor="daysSinceCrisis">
          {" "}
          Days Since Last Crisis:{" "}
          <input
            type="number"
            min="0"
            id="daysSinceCrisis"
            value={log.daysSinceLastCrisis}
            onChange={numChange}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewLogForm;
