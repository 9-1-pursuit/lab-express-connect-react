import React from "react";
import { useState, useEffect } from "react";
import Delete from "./Delete";
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
    setCaptainData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    axios.get().then().catch();
  }, []);

  return (
    <div>
      <form>
        <label htmlFor="captainsName">Captains Name:</label>
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
          value=""
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
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <Delete />
    </div>
  );
}

export default New;
