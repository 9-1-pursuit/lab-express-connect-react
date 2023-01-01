import { useContext, useState } from "react";
import uuid from "react-uuid";
import { ContextData } from "./Provider";
import LogsIndexDisplay from "./LogsIndexDisplay";
import SortDropdown from "../ReusableComponents/SortDropdown";
import "./LogsIndex.css"

function LogsIndex() {
    const {API, axios, logs, setLogs} = useContext(ContextData)
    // declare state for which logs array order to display
    const [display, setDisplay] = useState([])

    const showLogs = display.length > 0 ? display : logs
    
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
                { logs.length > 0 &&
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