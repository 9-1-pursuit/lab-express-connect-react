import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import FormInputs from "../ReusableComponents/FormInputs";
import BackButton from "../ReusableComponents/BackButton";
import { displayLogs } from "../ReusableComponents/helperFunctions";
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
        const whichIndex = originalIndex ? originalIndex : index
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
                // find index in sorted array that matches original index of logs array for submitting edit form (would use id key in future but don't have that option here)
                const match = respJson.data.findIndex(({captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis}) => {
                    const nameMatch = thisObj.captainName === captainName
                    const titleMatch = thisObj.title === title
                    const postMatch = thisObj.post === post
                    const mistakesMatch = thisObj.mistakesWereMadeToday === mistakesWereMadeToday
                    const crisisMatch = thisObj.daysSinceLastCrisis === daysSinceLastCrisis
                    
                    return nameMatch && titleMatch && postMatch && mistakesMatch && crisisMatch
                    })
                    setOriginalIndex(match)
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