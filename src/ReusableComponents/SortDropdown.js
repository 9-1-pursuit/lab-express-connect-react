import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../Components/Provider";
import { displayLogs } from "./helperFunctions";

function SortDropdown({setDisplay}) {
    const {API, axios, setLogs, logs, select, setSelect, setQuery} = useContext(ContextData)
    const navigate = useNavigate()

    // function for handling dropdown selection
    function handleDropdown(e) {
        const value = e.target.value
        setSelect(value)
       value === "default" ? setDisplay(logs) : setDisplay(displayLogs(value, [...logs]))
    }

    return (
        <>
        <label htmlFor="dropdown">Sort Logs By: </label>
        <select
        value = {select}
        onChange = {(event) => handleDropdown(event)}
        id = "dropdown">
            <option value = "default">Default</option>
            <option value= "asc">Captain Name Ascending</option>
            <option value = "desc">Captain Name Descending</option>
            <option value = "true">Mistakes Made</option>
            <option value = "false">No Mistakes Made</option>
            <option value = "gt10">More Than 10 Days Since Last Crisis </option>
            <option value = "gte20">At Least 20 Days Since Last Crisis</option>
            <option value = "lte5">5 Or Less Days Since Last Crisis</option>
        </select>
        </>
    );
}

export default SortDropdown;