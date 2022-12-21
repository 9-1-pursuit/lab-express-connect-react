import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextData } from "./Provider";
import axios from "axios";
import "./LogsIndex.css"

function LogsIndex(props) {
    const {logs, setLogs} = useContext(ContextData)


    useEffect(() => {

    }, [])
    return (
        <div className="index">
            index file
        </div>
    );
}

export default LogsIndex;