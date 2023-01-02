import Logs from "../Components/Logs";
import "./Index.css";

function Index() {
  return (
    <div className='Index_Container'>
      <h2>Index</h2>
      <div className="Index_Card">
        <Logs />
      </div>
    </div>
  );
}

export default Index;
