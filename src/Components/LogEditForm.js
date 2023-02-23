import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: ""
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
      .put(`${API}/logs/${index}`, log)
      .then((res) => {
          setLog(res.data);
          navigate(`/logs/${index}`);
        })
        .catch((err) => console.log(err));
    };

    useEffect(() => {
        console.log(index)
      axios
        .get(`${API}/logs/${index}`)
        .then((res) => setLog(res.data))
        .catch((err) => console.log(err));
    }, [index]);

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={log.captainName}
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

        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <textarea
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="1-100"
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
      <button
        onClick={() => {
          navigate(`/logs/${index}`);
        }}
      >
        Back!
      </button>
    </div>
  );
}

export default LogEditForm;