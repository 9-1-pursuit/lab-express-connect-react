import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Show from "./Show";
import Edit from "./Edit";
import Delete from "./Delete";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Index() {
  // console.log(API);
  const [captains, setCaptains] = useState([]);

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
              <Link to={`/logs/:${index}`}>
                {captain.title}
                <Edit />
                <Delete />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Index;
