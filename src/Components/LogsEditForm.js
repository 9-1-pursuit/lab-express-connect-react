import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import FormInputs from "../ReusableComponents/FormInputs";
import BackButton from "../ReusableComponents/BackButton";
import { displayLogs } from "../ReusableComponents/helperFunctions";
import "./LogsEditForm.css"


function LogsEditForm() {
    const {API, axios, select, logs} = useContext(ContextData)
    const {index} = useParams()
    const navigate = useNavigate()
    const [editForm, setEditForm] = useState({})
    const [checkbox, setCheckbox] = useState(false)
    // declare state to hold value of originalIndex of edited object if sort methods were used
    const [originalIndex, setOriginalIndex] = useState("")

    // handle edit form submit (put req)
    function handleSubmit(e) {
        e.preventDefault()
        const whichIndex = originalIndex ? originalIndex : index
        console.log(whichIndex)
        axios.put(`${API}/${whichIndex}`, editForm)
            .then(() => navigate(`/logs/${index}`))
            .catch(err => navigate("/*"))
    }

    useEffect(() => {
        if(select !== "default"){
            axios.get(`${API}`)
            .then(respJson =>  {
                setEditForm(displayLogs(select, respJson.data)[index])
                setCheckbox(displayLogs(select, respJson.data)[index].mistakesWereMadeToday)
            })
            .catch(err => navigate("/*"))
            // find index in sorted array that matches original index of logs array for submitting edit form
            const match = logs.findIndex(({captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis}) => {
                const nameMatch = editForm.captainName === captainName
                const titleMatch = editForm.title === title
                const postMatch = editForm.post === post
                const mistakesMatch = editForm.mistakesWereMadeToday === mistakesWereMadeToday
                const crisisMatch = editForm.daysSinceLastCrisis === daysSinceLastCrisis
                
                return nameMatch && titleMatch && postMatch && mistakesMatch && crisisMatch
                })
            setOriginalIndex(match)
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