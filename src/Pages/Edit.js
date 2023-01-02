import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// Style 
import './Edit.css'
const API = process.env.REACT_APP_API_URL;
//
function Edit() {
  let { index } = useParams();
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
  //fetch
  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setLog(res.data);
      })
      .catch((error) => console.log(error));
  }, [index]);

  // get request for new log
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/logs/${index}`, log)
      .then((res) => {
        setLog(res.data);
        navigate(`/logs/${index}`);
      })
      .catch((error) => console.log("Warning", error));
  };

  return (
    <div className="Edit">
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
<div className="Form_Button"> <button
        onClick={() => {
          navigate(`/logs/${index}`);
        }}
      >
        Back!
      </button></div>
     
    </div>
  );
}

export default Edit;
