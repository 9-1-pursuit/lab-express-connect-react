import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Back from "./Back";
import Delete from "./Delete";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Show() {
  const [captain, setCaptain] = useState([]);
  const index = useParams();

  useEffect(() => {
    axios
      //What's wrong with get http address?
      .get(`${API}/logs/:${index}`)
      .then((res) => setCaptain(res.data))
      .catch((err) => console.log(err));
  }, [index]);

  //Details not listing out why?
  return (
    <div className="">
      <h1>Captain's Log</h1>
      <h3>Show</h3>
      <p>{captain?.captainName}</p>
      <p>{captain?.title}</p>
      <p>{captain?.post}</p>
      <p>{captain?.mistakesWereMadeToday}</p>
      <p>{captain?.daysSinceLastCrisis}</p>
      <Back />
      <Delete />
      <Link to="/logs/:index/edit">Edit</Link>
    </div>
  );
}

export default Show;
