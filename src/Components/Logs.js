import React from 'react';
import { useState, useEffect } from 'react';
import ShowOneLog from "./ShowOneLog";
import axios from 'axios'
const API = process.env.REACT_APP_API_URL

const Logs = () => {
    const [logs, setLogs] = useState([])
    useEffect(() => {
        axios.get(`${API}/logs`)
        .then((res) => setLogs(res.data))
        }, [])
    
    return (
        <div className='logsIndex'> 
            <>
                <tr className='logListHdg'>
                    <td>Captain's name</td>
                    <td>Title</td>
                    <td>Mistakes</td> <br/><br/>
                </tr> 
          {logs.map((log, index) => {
              return <ShowOneLog key={index} log={log} index={index} />;
            })}
            </>       
        </div>
    );
};

export default Logs;

// changed from LogsPage