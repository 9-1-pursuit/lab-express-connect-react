import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios'
const API = process.env.REACT_APP_API_URL


function LogDetails() {

  const [log, setLog] = useState([]);  //set state to log variable to handle changes in log data
  let { index } = useParams();  //utilize useParams to capture index of selected log
  let navigate = useNavigate(); //employ Navigate to enable switching between views

   //get logs from express server(backend) and update state of log with that data as a response
  useEffect(() => {
    axios 
    .get(`${API}/logs/${index}`)
    .then(res => setLog(res.data))
    .catch(err => navigate('/error'))
  }, [index, navigate]);

  //delete selected log in response to delete button being clicked, then return to log list
  const handleDelete = () => {
    axios.delete(`${API}/logs/${index}`)
    .then(() =>{
        // window.alert("Log has been deleted!") - interfered with function execution on line 25
        navigate("/logs")
    })
    .catch(err => navigate('/error'))
  };

  //display this info
  return (
    <article className='showLogDetails'>
      <h6>{log.captainName}</h6>
      <p>{log.title}</p>
      <p>{log.post}</p>
      <p>{log.daysSinceLastCrisis}</p>
       
      <div className="showLogButtons">
        <Link to={`/logs`}> <button>Back</button> </Link>
        <Link to={`/logs/${index}/edit`}><button>Edit</button> </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
}

export default LogDetails;

        {/* </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}