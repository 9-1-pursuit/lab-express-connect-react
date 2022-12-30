import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import FormInputs from "../ReusableComponents/FormInputs";
import "./LogsEditForm.css"

function LogsEditForm() {
    const {API, axios} = useContext(ContextData)
    const {index} = useParams()
    const navigate = useNavigate()
    const [editForm, setEditForm] = useState({})
    const [checkbox, setCheckbox] = useState(false)

    // handle edit form submit (put req)
    function handleSubmit(e) {
        e.preventDefault()
        axios.put(`${API}/${index}`, editForm)
        .then(respJson => navigate(`/logs/${index}`))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`${API}/${index}`)
        .then(respJson => {
            setEditForm(respJson.data)
            setCheckbox(respJson.data.mistakesWereMadeToday)})
        .catch(err =>  console.log(err))
    },[index])


    return (
        <div className='edit'>
            <h2>Edit Log # {index}</h2>
            <form
            onSubmit={(event) => handleSubmit(event)}
            >
                { editForm.captainName && <FormInputs
                stateVar = {editForm}
                setFunction = {setEditForm}
                checkboxVar = {checkbox}
                setCheckboxFunction = {setCheckbox} />
                }
           </form>
        </div>
    );
}

export default LogsEditForm;