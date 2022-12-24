import "./Log.css";
import LogFooter from "./LogFooter";

export default function Logs({ log, index }) {
  return (
    <div className="log-container">
      <div>
        <h4 style={{ fontFamily: "monospace" }}>
          Captain's Log #{Number(index) + 1}
        </h4>
        <p
          className="
        black-border">
          <strong>{log.title}</strong> - By <em>{log.captainName}</em>
        </p>
        <p className="black-border">
          Mistakes: {log.mistakesWereMadeToday ? "Yes" : "No"}
        </p>
        <p className="black-border">
          Days since last crisis: {log.daysSinceLastCrisis}
        </p>
        <p className="black-border" id="log-post">
          Post: {log.post}
        </p>
      </div>
      <br></br>
      <hr></hr>
      <LogFooter />
    </div>
  );
}
