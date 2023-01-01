import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Index() {
  // console.log(API);
  const [captains, setCaptains] = useState([]);
  const regex = /(\d+)/;

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((res) => {
        // console.log(res.data);
        setCaptains(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Log">
      <ul>
        {captains.map((captain, index) => {
          return (
            <li key={index}>
              <Link to={`/logs${regex}`}>{captain.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Index;
