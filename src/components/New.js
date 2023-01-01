import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function New() {
  // console.log(API);
  const [captainData, setCaptainData] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  function handleTextChange(e) {
    setCaptainData({ ...captainData, [e.target.id]: e.target.value });
  }

  const handleCheckboxChange = () => {
    setCaptainData({
      ...captainData,
      mistakesWereMadeToday: !captainData.mistakesWereMadeToday,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    axios
      .get(`${API}/logs/new`)
      .then((res) => {})
      .catch();
  }, []);

  return (
    <div>
      <h1>Captain's Log</h1>
      <h3>New</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainsName">Captain's Name:</label>
        <input
          type="text"
          value=""
          onChange={handleTextChange}
          id="captainsName"
          placeholder="...captains-name"
        />
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          value=""
          onChange={handleTextChange}
          id="title"
          placeholder="...title"
        />
        <label htmlFor="post">Post:</label>
        <input
          type="text"
          value=""
          onChange={handleTextChange}
          id="post"
          placeholder="...post"
        />
        <label htmlFor="...days-since-last-crisis">
          Days Since Last Crisis:
        </label>
        <input
          type="text"
          id="days-since-last-crisis"
          value={captainData.mistakesWereMadeToday}
          onChange={handleTextChange}
          placeholder="days-since-last-crisis"
        />
        <label htmlFor="update">Mistakes were made today:</label>
        <input
          type="button"
          id="days-since-last-crisis"
          value=""
          onChange={handleTextChange}
          placeholder="days-since-last-crisis"
        />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default New;
