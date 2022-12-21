import { useState, useEffect } from "react";
import { useParams, Link , useNavigate} from "react-router-dom";
import "./LogEdit.css"
import axios from "axios";
const API = process.env.REACT_APP_API_URL

function LogEdit(){
    let navigate = useNavigate()
    let { index } = useParams();

    const [logs, setLogs] = useState({
      captainName: "",
      title: "",
      post: "",
      mistakesWereMadeToday: false,
      daysSinceLastCrisis: ""
    });

    const handleTextChange = (event) => {
        setLogs({ ...logs, [event.target.id]: event.target.value });
      };


      const handleCheckboxChange = () => {
        setLogs({ ...logs, mistakesWereMadeToday: !logs.mistakesWereMadeToday });
      };

      useEffect(() => {
        axios.get(`${API}/logs/${index}`)
        .then(res => setLogs(res.data))
        .catch(err => console.log(err))
      }, [index]);

      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${API}/logs` , logs)
        .then((res) => {
            setLogs(res.data)
            navigate(`/logs/${index}`)
        })
        .catch(err => console.log(err))
      };

      return(
        <div className="New">
          <h1>Edit</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="captainName">Captain's Name:</label>
          <input
            id="captainName"
            value={logs.captainName}
            type="text"
            onChange={handleTextChange}
            placeholder="Captain Name"
            required
          />
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            required
            value={logs.title}
            placeholder="Title"
            onChange={handleTextChange}
          />
          <label htmlFor="post">Post:</label>
          <textarea
            id="post"
            type="text"
            value={logs.post}
            onChange={handleTextChange}
          />
          <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
          <input
            id="daysSinceLastCrisis"
            type="number"
            onChange={handleTextChange}
            value={logs.daysSinceLastCrisis}
          />
          <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={logs.mistakesWereMadeToday}
        />
          <br />
          <input type="submit" />
        </form>
        <Link to={`/logs/${index}`}>
        <button>Back</button>
      </Link>
      </div>
      )
}

export default LogEdit