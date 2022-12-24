import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
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
      <label htmlFor="backButton">
        <button
          onClick={() => {
            navigate("/logs");
          }}
          id="backButton">
          Back
        </button>
      </label>
      <label htmlFor="editButton">
        <button id="editButton">Edit</button>
      </label>
      <label htmlFor="deleteButton">
        <button onClick={handleDelete} id="deleteButton">
          Delete
        </button>
      </label>
    </footer>
  );
}
