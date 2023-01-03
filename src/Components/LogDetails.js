import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
const API = process.env.REACT_APP_API_URL


function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios 
    .get(`${API}/logs/${index}`)
    .then(res => setLog(res.data))
    .catch(err => navigate('/error'))
  }, [index, navigate]);


  const handleDelete = () => {
    axios.delete(`${API}/logs/${index}`)
    .then(() =>{
        // window.alert("Log has been deleted!")
        navigate("/logs")
    })
    .catch(err => navigate('/error'))
  };
  return (
    <article>
      <h6>{log.captainName}</h6>
      <p>{log.title}</p>
      <p>{log.post}</p>
      <p>{log.daysSinceLastCrisis}</p>
   
      <div>
        <div>
          {" "}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default LogDetails;

        {/* </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}