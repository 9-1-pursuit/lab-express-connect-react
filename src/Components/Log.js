import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// Style
import "./Log.css"
//*
const API = process.env.REACT_APP_API_URL;
//
export default function Log() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => {
        setLog(res.data);
      })
      .catch((err) => navigate("/not-found"));
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  };
  return ( 
  <div className="Log_Container">
    <Link to={`/logs/${index}/edit`}>
    <article className="Log_Article" >
      <h3>
        {log.captainName} - {log.title}
      </h3>
      <p>
        <b>Post:</b>{" "}
        {log.post}
      </p>
      <p>
        <b>Days sincelast Crisis:</b> {log.daysSinceLastCrisis}
      </p>
    
    </article></Link> 
     <div className="Log_Buttons">
        {" "} <div className="Back_Button"><Link to={"/logs"}>
          {" "}
         
          <button>Back</button>{" "}
        </Link></div>
        <div className="Edit_Button">  <button
          onClick={() => {
            navigate(`/logs/${index}/edit`);
          }}
        >
          Edit
        </button></div>
      <div className="Delete_Button"> <button onClick={handleDelete}>Delete</button></div>
      </div>
           </div>
  );
}
