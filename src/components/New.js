import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function New() {
  // console.log(API);
  const navigate = useNavigate();
  const { index } = useParams();

  const [captainData, setCaptainData] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API}/logs`, captainData)
      .then((res) => {
        setCaptainData(res.data);
        navigate("/logs");
      })
      .catch((err) => console.log(err));
  };

  function handleTextChange(e) {
    setCaptainData({ ...captainData, [e.target.id]: e.target.value });
  }
  // not updating state value WHY?
  const handleCheckboxChange = () => {
    setCaptainData({
      ...captainData,
      mistakesWereMadeToday: !captainData.mistakesWereMadeToday,
    });
  };

  useEffect(() => {
    axios
      .post(`${API}/logs/new`)
      .then((res) => {
        // console.log(res);
        setCaptainData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>New</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          type="text"
          value={captainData.captainName}
          onChange={handleTextChange}
          id="captainName"
          placeholder="captains-name"
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          value={captainData.title}
          onChange={handleTextChange}
          id="title"
          placeholder="title"
        />
        <label htmlFor="post">Post:</label>
        <textarea
          type="text"
          value={captainData.post}
          onChange={handleTextChange}
          id="post"
          placeholder="post"
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          type="number"
          id="daysSinceLastCrisis"
          value={captainData.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="daysSinceLastCrisis"
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          type="checkbox"
          id="mistakesWereMadeToday"
          value={captainData.mistakesWereMadeToday}
          onChange={handleTextChange}
          placeholder="mistakesWereMadeToday"
        />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default New;
