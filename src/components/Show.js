import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Delete from "../buttons/Delete";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Show() {
  const [singleCaptain, setSingleCaptain] = useState([]);
  const { index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setSingleCaptain(res.data))
      .catch((err) => console.log(err));
  }, [index]);

  //When I pass the captain and index as props I was able to see the data list out but on the index show is there a way to get the details to list out without making another fetch call?
  return (
    <div className="show">
      <h1>Show</h1>
      <p>
        {singleCaptain?.title} - By {singleCaptain?.captainName}
      </p>
      <p>{singleCaptain?.post}</p>
      <p>{singleCaptain?.mistakesWereMadeToday}</p>
      <p>Days since last crisis: {singleCaptain?.daysSinceLastCrisis}</p>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <Delete />
    </div>
  );
}

export default Show;
