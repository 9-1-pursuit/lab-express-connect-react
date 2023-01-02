import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { ContextData } from "./Provider";
import LogsIndexDisplay from "./LogsIndexDisplay";
import SortDropdown from "../ReusableComponents/SortDropdown";
import { displayLogs } from "../ReusableComponents/helperFunctions";
import "./LogsIndex.css"

function LogsIndex() {
    const {API, axios, logs, setLogs, select} = useContext(ContextData)
    const navigate = useNavigate()
    // declare state for which logs array order to display
    const [display, setDisplay] = useState([])

    const showLogs = select !== "default" ? display : logs

    useEffect(() => {
        axios.get(`${API}`)
        .then(respJson => {
            setLogs(respJson.data)
            setDisplay(displayLogs(select, [...respJson.data]))
        })
        .catch(err => navigate("/*"))
    }, [])
    
    return (
        <div className="index">
            <h2>INDEX</h2>
            <SortDropdown
            setDisplay = {setDisplay} />
            <section className="listedLogs">
                <div className= "logsHeader">
                    <p>Mistakes</p>
                    <p>Captain</p>
                    <p>Log Title</p>
                </div>
                { showLogs &&
                    showLogs.map(({captainName, title, mistakesWereMadeToday}, index) => 
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