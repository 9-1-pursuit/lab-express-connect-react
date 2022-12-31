import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "../Components/Provider";

function SortDropdown({setLogs}) {
    // declare state for select value
    const [select, setSelect] = useState("default")
    const {API, axios} = useContext(ContextData)
    const navigate = useNavigate()

    // function for handling dropdown selection
    function handleDropdown(e) {
        const value = e.target.value
        setSelect(value)
        let type; 
        if(value === "asc" || value === "desc") type = "order"
        if(value === "true" || value === "false") type = "mistakes"
        if(value === "gt10" || value === "gte20" || value === "lte5") type = "lastCrisis"

        let query = !type ? `` : `?${type}=${value}`

        axios.get(`${API}${query}`)
        .then(respJson => setLogs(respJson.data))
        .catch(err => navigate("/*") )
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