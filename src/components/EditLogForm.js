import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function EditLogForm() {

  const navigate = useNavigate();

  let { index } = useParams();

  const [log , setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
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
    .then(res => setLog(res.data))
    .catch(err => console.log(err))
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .put(`${API}/logs/${index}`, log)
    .then((response) => {
      setLog(response.data);
      navigate(`/logs/${index}`);
    })
    .catch(err => console.log(err))
  };

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          type="text"
          value={log.captainName}
          onChange={handleTextChange}
          placeholder="Captain's Name"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={log.title}
          placeholder="Title"
          onChange={handleTextChange}
          required
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
          type="number"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="10,20,22..."
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="Enter your post here..."
          onChange={handleTextChange}
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/logs/${index}`}>
        <button>Back</button>
      </Link>

      <button onClick={handleDelete}>Delete</button>

    </div>
  );
}

export default EditLogForm;
