import { useContext, useState } from "react";
import { ContextData } from "./Provider";
import { useNavigate } from "react-router-dom";
import FormInputs from "../ReusableComponents/FormInputs";
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
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: undefined,
    })

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
           <h2>NEW CAPTAIN'S LOG</h2>
           <form 
           onSubmit={(event) => handleSubmit(event)}>
                <FormInputs 
                stateVar = {newForm}
                setFunction = {setNewForm}
                checkboxVar = {checkbox}
                setCheckboxFunction = {setCheckbox}
                />
            </form>       
        </div>
    );
}

export default LogsNewForm;