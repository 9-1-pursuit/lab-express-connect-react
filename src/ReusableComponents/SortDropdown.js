import { useState, useContext } from "react";
import { ContextData } from "../Components/Provider";


function SortDropdown({setLogs}) {
    // declare state for select value
    const [select, setSelect] = useState("")
    const {API, axios} = useContext(ContextData)

    // function for handling dropdown selection
    function handleDropdown(e) {
        const value = e.target.value
        setSelect(value)
        if(value === "asc" || value === "desc"){
            axios.get(`${API}?order=${value}`)
            .then(respJson => setLogs(respJson.data))
        }
    }
    return (
        <select
        value = {select}
        onChange = {(event) => handleDropdown(event)}>
            <option value = "">Sort Logs By</option>
            <option value= "asc">Captain Name Ascending</option>
            <option value = "desc">Captain Name Descending</option>
            <option value = "true">Mistakes Made</option>
            <option value = "false">No Mistakes Made</option>
            <option value = "gt10">More Than 10 Days Since Last Crisis </option>
            <option value = "gte20">At Least 20 Days Since Last Crisis</option>
            <option value = "lte5">5 Or Less Days Since Last Crisis</option>
        </select>
    );
}

export default SortDropdown;