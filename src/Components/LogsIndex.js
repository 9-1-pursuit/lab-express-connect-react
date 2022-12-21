import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import { ContextData } from "./Provider";
import "./LogsIndex.css"

function LogsIndex(props) {
    const {logs, setLogs} = useContext(ContextData)

    return (
        <div className="index">
            <section className="logs">
                {
                    logs.map(({captainName, title }) => 
                        <div key = {uuid()}>
                            <p>{captainName}</p>
                            <p>{title}</p>
                        </div>
                    )
                }
            </section>
        </div>
    );
}

export default LogsIndex;