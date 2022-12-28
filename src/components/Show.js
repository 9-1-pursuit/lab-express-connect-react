import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Edit from "./Edit";
import Delete from "./Delete";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Show({ captain }) {
  // const [cap, setCap] = useState();
  // const id = useParams();

  // useEffect(() => {
  //   axios
  //     .get(`${API}/logs/:${id}`)
  //     .then((res) => setCap(res.data))
  //     .catch((err) => console.log(err));
  // }, [id]);

  //WHY is my prop undefined?
  console.log(captain);

  return (
    <div className="">
      <p>{}</p>
      <p>{}</p>
      <p>{}</p>
      <p>{}</p>
      <Edit />
      <Delete />
    </div>
  );
}

export default Show;
