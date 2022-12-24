import "./Log.css";

export default function Logs({ log, index }) {
  return (
    <div className="log-container">
      <body>
        <h4 style={{ fontFamily: "monospace" }}>
          Log #{Number(index) + Number(Math.random().toFixed(3)) + "." + index}
        </h4>
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
      </body>
      <br></br>
      <hr></hr>
      <footer id="log-buttons-footer">
        <label htmlFor="backButton">
          <button id="backButton">Back</button>
        </label>
        <label htmlFor="editButton">
          <button id="editButton">Edit</button>
        </label>
        <label htmlFor="deleteButton">
          <button id="deleteButton">Delete</button>
        </label>
      </footer>
    </div>
  );
}
