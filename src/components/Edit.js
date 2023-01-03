import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Edit() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [updateCaptainData, setUpdateCaptainData] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  function handleTextChange(e) {
    setUpdateCaptainData({
      ...updateCaptainData,
      [e.target.id]: e.target.value,
    });
  }

  const handleCheckboxChange = () => {
    setUpdateCaptainData({
      ...updateCaptainData,
      mistakesWereMadeToday: !updateCaptainData.mistakesWereMadeToday,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .put(`${API}/logs/${index}`, updateCaptainData)
      .then(() => navigate(`/logs/${index}`))
      .catch((err) => console.log(err));
  }

  return (
    <div className="edit">
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        textarea
        <label htmlFor="captainsName">Captain's Name:</label>
        <input
          type="text"
          value={updateCaptainData.captainName}
          onChange={handleTextChange}
          id="captainName"
          placeholder="captains-name"
        />
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={updateCaptainData.title}
          onChange={handleTextChange}
          id="title"
          placeholder="title"
        />
        <label htmlFor="post">Post:</label>
        <textarea
          type="text"
          value={updateCaptainData.post}
          onChange={handleTextChange}
          id="post"
          placeholder="post"
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          type="number"
          id="daysSinceLastCrisis"
          value={updateCaptainData.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="daysSinceLastCrisis"
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          type="checkbox"
          id="mistakesWereMadeToday"
          value={updateCaptainData.mistakesWereMadeToday}
          onChange={handleCheckboxChange}
          placeholder="Mistakes-were-made-today"
        />
        <input type="submit"></input>
      </form>
      <Link to={"/logs"}>Back</Link>
    </div>
  );
}
export default Edit;
