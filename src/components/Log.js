import "./Log.css";

export default function Logs({ log, index }) {
  return (
    <div className="log-container">
      <h4>Log #{index}</h4>
      <p
        className="
        black-border">
        Title: <strong>{log.title}</strong>{" "}
      </p>
      <p className="black-border">
        Captain: <em>{log.captainName}</em>
      </p>
      <p className="black-border">
        Mistakes: {log.mistakesWereMadeToday ? "🔴 Yes" : "🟢 No"}
      </p>
      <p className="black-border">
        Days since last Crisis: {log.daysSinceLastCrisis}
      </p>
      <p className="black-border" id="log-post">
        Post: {log.post}
      </p>
    </div>
  );
}
