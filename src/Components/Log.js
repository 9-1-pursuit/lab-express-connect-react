import { useState } from "react";
import { Link } from "react-router-dom";

function Log({ log, index }) {
    

    console.log(log)

  return (
    <div>
        
      <div>
        {log.mistakesWereMadeToday ? (
          <span>💥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </div>
      <div>
        <a href={log.url} target="_blank" rel="noreferrer">
          {log.name}
        </a>
      </div>
      <td>
        <Link to={`/logs/${index}`}>🧑🏾‍✈️</Link>
      </td>
    </div>
  );
}

export default Log;