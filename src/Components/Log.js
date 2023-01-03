import React from 'react';
import { Link } from "react-router-dom";


const Log = ({log, index}) => {
    return (
        <tr>
            <td>
                {log.mistakesWereMadeToday ? (
                    <span>💥</span>
                ): (
                    <span>&nbsp; &nbsp; &nbsp;</span>
                )}
            </td>
            <td>
            <Link to={`/logs/${index}`}>{log.captainName}</Link>
            </td>
            <td>
                {log.title}
            </td>

        </tr>
    );
};

export default Log;