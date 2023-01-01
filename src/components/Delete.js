import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

//Delete button not working how I want it to WHY?
function Delete() {
  const [captain, setCaptain] = useState([]);
  const { index } = useParams;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/:${index}`)
      .then((res) => setCaptain(res.data))
      .catch((err) => console.log(err));
  }, [index, navigate]);

  function handleOnClick() {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate("/logs");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="captainName">
      <button>Delete</button>
    </div>
  );
}

export default Delete;
