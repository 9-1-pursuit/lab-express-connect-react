import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Show from "./Show";
const API = process.env.REACT_APP_API_URL;

function Index() {
  // console.log(API);
  const [captainsLog, setCaptainsLog] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((res) => {
        // console.log(res.data);
        setCaptainsLog(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Log">
      <h1>Index</h1>
      <section>
        <table>
          <thead>
            <th>See this Captain</th>
          </thead>
          <tbody>
            <tr>
              {captainsLog.map((captain, index) => {
                return (
                  <td key={index}>
                    <Link to={`/logs/${index}`}>{captain.captainName}</Link>
                    {/* <Show captain={captain} index={index} /> */}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Index;
