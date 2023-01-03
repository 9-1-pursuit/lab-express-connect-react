import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import "./LogsIndex.css"

// const API = process.env.REACT_APP_API_URL
const API = "http://localhost:3001"

function LogsIndex() {
    const [logs, setLogs] = useState([])

    useEffect(() => {
        axios
            .get(`${API}/logs`)
            .then( res => {
                setLogs(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="index">
            <h1>Index</h1>
            <table className="table-container">
                <thead>
                    <tr>
                        <th>Mistakes</th>
                        <th>Captain Name</th>
                        <th>Log</th>
                    </tr>
                </thead>
                <tbody>
                {
                logs.map((log, index) => {
                    return (
                        <tr key={index}>
                            <td>{log.mistakesWereMadeToday ? "Yes" : "No"}</td>
                            <td>{log.captainName}</td>
                            <td><Link to={`/logs/${index}`}>{log.title}</Link></td>
                        </tr>
                    )
                })
            }
                </tbody>
            </table>
        </div>
    );
}

export default LogsIndex;