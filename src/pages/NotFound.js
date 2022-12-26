import "./NotFound.css";

import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          <h4>404 Error: Resource Not Found</h4>
        </div>
        <div className="modal-footer">
          <button onClick={() => navigate("/")}>Close</button>
        </div>
      </div>
    </div>
  );
}
