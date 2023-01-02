import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import { Stack } from 'react-bootstrap';
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
    <Card className="card">
      <Card.Body>
        <div className="nameDetails">
          <div className="nameCard">
            <Card.Title>
              <h2>
                {log.title ? <span> {log.title}</span> : null} -By
                {log.captainName ? <span> {log.captainName}</span> : null}
              </h2>
            </Card.Title>
            <Card.Body>
              <p>{log.post ? <span> {log.post}</span> : null}</p>
            </Card.Body>
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
              <Stack>
                <Button variant="primary" size="sm">
                  Back
                </Button>
              </Stack>
              {/* <button>Back</button> */}
            </Link>{' '}
            <Link to={`/logs/${index}/edit`}>
              <button>Edit</button>
            </Link>{' '}
            <Link to={`/logs`}>
              <button onClick={handleDelete}>Delete</button>
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LogsDetails;
