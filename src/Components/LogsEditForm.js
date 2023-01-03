import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import FormInputs from "../ReusableComponents/FormInputs";
import BackButton from "../ReusableComponents/BackButton";
import { displayLogs, matchIndex } from "../ReusableComponents/helperFunctions";
import "./LogsEditForm.css"


function LogsEditForm() {
    const {API, axios, select, originalIndex, setOriginalIndex} = useContext(ContextData)
    const {index} = useParams()
    const navigate = useNavigate()
    const [editForm, setEditForm] = useState({})
    const [checkbox, setCheckbox] = useState(false)
 
    // handle edit form submit (put req)
    function handleSubmit(e) {
        e.preventDefault()
        const whichIndex = select !== "default" ? originalIndex : index
        axios.put(`${API}/${whichIndex}`, editForm)
            .then(() => navigate(`/logs/${index}`))
            .catch(err => navigate("/*"))
    }

    useEffect(() => {
        if(select !== "default"){
            axios.get(`${API}`)
            .then(respJson =>  {
                const thisObj = displayLogs(select, respJson.data)[index]
                setEditForm(thisObj)
                setCheckbox(thisObj.mistakesWereMadeToday)
                matchIndex(respJson.data, thisObj, setOriginalIndex)
            })
            .catch(err => navigate("/*")) 
        }
        else{
            axios.get(`${API}/${index}`)
            .then(respJson => {
            setEditForm(respJson.data)
            setCheckbox(respJson.data.mistakesWereMadeToday)})
            .catch(err =>  navigate("/*"))
        }
    },[index])

    return (
        <div className='edit'>
            <h2>EDIT CAPTAIN'S LOG # {index}</h2>
            <form
            onSubmit={(event) => handleSubmit(event)}>
                { editForm.captainName && 
                <FormInputs
                stateVar = {editForm}
                setFunction = {setEditForm}
                checkboxVar = {checkbox}
                setCheckboxFunction = {setCheckbox} />
                }
           </form>
           <BackButton />
        </div>
    );
}

export default LogsEditForm;