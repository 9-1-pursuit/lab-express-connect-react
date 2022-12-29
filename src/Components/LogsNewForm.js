import { useContext, useState } from "react";
import { ContextData } from "./Provider";
import { useNavigate } from "react-router-dom";
import TextInput from "../ReusableComponents/TextInput";
import NumberInput from "../ReusableComponents/NumberInput";
import "./LogsNewForm.css"


function LogsNewForm() {

const {API, axios} = useContext(ContextData)
const navigate = useNavigate()
// declare state for checkbox
const [checkbox, setCheckbox] = useState(false)
// declare state for new form input
const [newForm, setNewForm] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: undefined,
    daysSinceLastCrisis: undefined,
})
// function for handling checkbox change
function handleCheckbox() {
    setCheckbox(!checkbox)
    newForm.mistakesWereMadeToday = !checkbox
}

//  function for handling form submit
function handleSubmit(e) {
    e.preventDefault()
    // use post request, 1st arg: url, 2nd arg: data to send
    axios.post(`${API}`, newForm)
    .then(() => navigate("/logs"))
    .catch(err => console.log(err))
}

    return (
        <div className='new'>
           <form 
           onSubmit={(event) => handleSubmit(event)}>
            {/* Name */}
            <TextInput
            stateVar = {newForm}
            setFunction = {setNewForm}
            value = {"captainName"} />
            <br></br>
            
            {/* title */}
            <TextInput
            stateVar = {newForm}
            setFunction = {setNewForm}
            value = {"title"} />
            <br></br>

            {/* post */}
            <TextInput
            stateVar = {newForm}
            setFunction = {setNewForm}
            value = {"post"} />
            <br></br>
            
            {/* Mistakes */}
            <label
            htmlFor="mistakes">Mistakes Made Today?
                <input
                id = "mistakes" 
                type= "checkbox"
                checked = {checkbox}
                onChange = {() => handleCheckbox()}
                />
            </label>
            <br></br>

            {/* days Since crisis */}
            <NumberInput
            stateVar = {newForm}
            setFunction = {setNewForm}
            value = {"daysSinceLastCrisis"}
             />
            <br></br>

            {/* submit button */}
            <input
            type = "submit" />

        </form> 
            
        </div>
    );
}

export default LogsNewForm;