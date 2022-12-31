
function Log({ log, index }) {
  return (
    <tr className="Log">
      <td>
        {log.mistakesWereMadeToday ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={`/logs/${index}`}>{log.captainName}</a>
      </td>
      <td>
        {log.title}
      </td>
    </tr>
  );
}

export default Log