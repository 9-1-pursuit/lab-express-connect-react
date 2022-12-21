import { useEffect, useState, useContext } from "react";
import uuid from "react-uuid";
import { ContextData } from "./Provider";
import LogsIndexDisplay from "./LogsIndexDisplay";
import "./LogsIndex.css"




function LogsIndex(props) {
    const {logs, setLogs} = useContext(ContextData)

    return (
        <div className="index">
            <h2>INDEX</h2>
            <section className="listedLogs">
            <div className= "logsHeader">
                <span>Mistakes</span>
                <p>Captain</p>
                <p>Log Title</p>
            </div>
                {
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