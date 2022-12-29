import { useState } from "react";
import "./LogsNewForm.css"

function LogsNewForm() {
/* 
captainName (text)
title (text)
post (text)
mistakesWereMadeToday (checkbox)
daysSinceLastCrisis (number)
submit (submit) */

// declare state for checkbox
const [checkbox, setCheckbox] = useState(false)
// declare state for new form input
const [newForm, setNewForm] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: checkbox,
    daysSinceLastCrisis: null,
})
// function for handling checkbox change
function handleCheckbox() {
    setCheckbox(!checkbox)
}





    return (
        <div className='new'>
            new form
            <input 
            type= "checkbox"
            checked = {checkbox}
            onChange = {() => handleCheckbox()}
            />
        </div>
    );
}

export default LogsNewForm;