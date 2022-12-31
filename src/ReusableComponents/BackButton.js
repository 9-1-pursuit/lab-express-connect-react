import { Link } from "react-router-dom";

function BackButton() {
    return (
        <Link to = "/logs">
            <button>Back</button>
        </Link>
    );
}

export default BackButton;