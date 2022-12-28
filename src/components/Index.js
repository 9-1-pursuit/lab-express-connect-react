import React from "react";
import { useState, useEffect } from "react";
import Show from "./Show";
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
        {captains.map((captain, i) => {
          return (
            <li key={i}>
              {/* {captain.captainsName} */}
              {/* <Show captain={captain} /> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Index;
