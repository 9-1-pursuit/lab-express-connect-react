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

            {logs.map((log, index) => {
              return <ShowOneLog key={index} log={log} index={index} />;
            })}
          
        </div>
    );
};

export default Logs;

// changed from LogsPage