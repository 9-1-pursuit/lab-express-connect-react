import { useContext, useState,useEffect } from "react";
import uuid from "react-uuid";
import { ContextData } from "./Provider";
import LogsIndexDisplay from "./LogsIndexDisplay";
import SortDropdown from "../ReusableComponents/SortDropdown";
import { displayLogs } from "../ReusableComponents/helperFunctions";
import "./LogsIndex.css"

function LogsIndex() {
    const {API, axios, logs, setLogs, select} = useContext(ContextData)
    // declare state for which logs array order to display
    const [display, setDisplay] = useState(displayLogs(select, [...logs]))

    const showLogs = select !== "default" ? display : logs
    
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