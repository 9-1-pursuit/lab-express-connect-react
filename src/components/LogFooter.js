import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./LogFooter.css";

const API = process.env.REACT_APP_API_URL;

export default function LogFooter() {
  const navigate = useNavigate();
  const { index } = useParams();

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => navigate("/logs"))
      .catch(() => navigate("/not-found"));
  };

  return (
    <footer id="log-buttons-footer">
      <Link to="/logs">
        <label htmlFor="backButton">
          <button id="backButton">Back</button>
        </label>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <label htmlFor="editButton">
          <button id="editButton">Edit</button>
        </label>
      </Link>
      <label htmlFor="deleteButton">
        <button onClick={handleDelete} id="deleteButton">
          Delete
        </button>
      </label>
    </footer>
  );
}
