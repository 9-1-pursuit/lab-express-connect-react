import { useContext, useState } from "react";
import { ContextData } from "./Provider";
import { useNavigate } from "react-router-dom";
import "./LogsNewForm.css"


function LogsNewForm() {
/* 
captainName (text)
title (text)
post (text)
mistakesWereMadeToday (checkbox)
daysSinceLastCrisis (number)
submit (submit) */
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
// function for handling text input change
function handleTextChange(e) {
    let value = e.target.value
    const id = e.target.id
    if(id === "daysSinceLastCrisis"){
        value = +e.target.value
    }
    setNewForm({...newForm, [id]: value})
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
            <label htmlFor="captainName">Captain Name: 
                <input 
                id = "captainName"
                type = "text"
                value = {newForm.captainName}
                onChange = {(event) => handleTextChange(event)}
                />
            </label>
            <br></br>

            {/* title */}
            <label htmlFor="title">Title: 
                <input 
                id = "title"
                type = "text"
                value = {newForm.title}
                onChange = {(event) => handleTextChange(event)}
                />
            </label>
            <br></br>

            {/* post */}
            <label htmlFor="post">Post: 
                <input 
                id = "post"
                type = "text"
                value = {newForm.post}
                onChange = {(event) => handleTextChange(event)}
                />
            </label>
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
            <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis: 
                <input 
                id = "daysSinceLastCrisis"
                type = "number"
                value = {newForm.daysSinceLastCrisis}
                onChange = {(event) => handleTextChange(event)}
                />
            </label>
            <br></br>

            {/* submit button */}
            <input
            type = "submit" />

        </form> 
            
        </div>
    );
}

export default LogsNewForm;