import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { ContextData } from "./Provider";
import LogsIndexDisplay from "./LogsIndexDisplay";
import "./LogsIndex.css"

function LogsIndex() {
    const [logs, setLogs] = useState([])
    const {API, axios} = useContext(ContextData)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${API}`)
        .then(respJson => setLogs(respJson.data))
        .catch(err => navigate("/*"))
    },[])

    return (
        <div className="index">
            <h2>INDEX</h2>
            <section className="listedLogs">
                <div className= "logsHeader">
                    <p>Mistakes</p>
                    <p>Captain</p>
                    <p>Log Title</p>
                </div>
                { logs.length > 0 &&
                    logs.map(({captainName, title, mistakesWereMadeToday}, index) => 
                       <LogsIndexDisplay 
                       key={uuid()}
                       captain={captainName}
                       title={title}
                       mistakes={mistakesWereMadeToday}
                       index={index}
                        />
                    )
                }
            </section>
        </div>
    );
}

export default LogsIndex;