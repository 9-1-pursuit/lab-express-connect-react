import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Delete() {
  const [captain, setCaptain] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setCaptain(res.data))
      .catch((err) => navigate("/not-found"));
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate("/logs");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Delete;
