import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextData } from "./Provider";
import FormInputs from "../ReusableComponents/FormInputs";
import "./LogsEditForm.css"


function LogsEditForm() {
    const {API, axios} = useContext(ContextData)
    const {index} = useParams()
    const [editForm, setEditForm] = useState({})
    const [checkbox, setCheckbox] = useState(false)

    useEffect(() => {
        axios.get(`${API}/${index}`)
        .then(respJson => {
            setEditForm(respJson.data)
            setCheckbox(respJson.data.mistakesWereMadeToday)})
        .catch(err =>  console.log(err))
    },[index])


    return (
        <div className='edit'>
           { editForm.captainName && <FormInputs
            stateVar = {editForm}
            setFunction = {setEditForm}
            checkboxVar = {checkbox}
            setCheckboxFunction = {setCheckbox} />
           }
        </div>
    );
}

export default LogsEditForm;