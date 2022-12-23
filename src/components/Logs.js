import "./Logs.css";

export default function Logs({ logs }) {
  const formattedLogs = logs.map((log, index) => {
    return (
      <li key={index}>
        <div className="logs-container">
          <section>{log.mistakesWereMadeToday ? "True" : "False"}</section>
          <section>{log.captainName}</section>
          <section>{log.title}</section>
        </div>
      </li>
    );
  });

  return (
    <ul>
      <li key="alpha">
        <div className="logs-subtitles-container">
          <section>Mistakes</section>
          <section>Captain Name</section>
          <section>See This Log</section>
        </div>
      </li>
      {formattedLogs}
    </ul>
  );
}
