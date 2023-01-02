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
    <div className="nameDetails">
      <div className="nameCard">
        <h2>
          {log.title ? <span> {log.title}</span> : null} -By
          {log.captainName ? <span> {log.captainName}</span> : null}
        </h2>
        <p>{log.post ? <span> {log.post}</span> : null}</p>
        <h6>
          {log.daysSinceLastCrisis ? (
            <span>
              <b>Days Since Last Crisis</b>:{log.daysSinceLastCrisis}
            </span>
          ) : null}
        </h6>
      </div>

      <div>
        {' '}
        <Link to={`/logs`}>
          <button>Back</button>
        </Link>{' '}
        <Link to={`/logs/${index}/edit`}>
          <button>Edit</button>
        </Link>{' '}
        <Link to={`/logs`}>
          <button onClick={handleDelete}>Delete</button>
        </Link>
      </div>
    </div>
  );
}

export default LogsDetails;
