import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

function LogsDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((res) => setLog(res.data))
      .catch((err) => console.log(err));
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3>
        {log.captainName ? (
          <span>
            {' '}
            <b>Name</b>: {log.captainName}
          </span>
        ) : null}
      </h3>
      <p>
        {log.title ? (
          <span>
            {' '}
            <b>Title</b>: {log.title}
          </span>
        ) : null}
      </p>
      <p>
        {log.post ? (
          <span>
            {' '}
            <b>Post</b>: {log.post}
          </span>
        ) : null}
      </p>
      <p>
        {log.daysSinceLastCrisis ? (
          <span>
            <b>Days Since Last Crisis</b>:{log.daysSinceLastCrisis}
          </span>
        ) : null}
      </p>
      <div>
        {' '}
        <Link to={`/logs`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        {' '}
        <Link to={`/logs/${index}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        {' '}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default LogsDetails;
