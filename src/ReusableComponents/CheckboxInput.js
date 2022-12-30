import { useState } from "react";
import { convertInput } from "./helperFunctions";

function CheckboxInput({stateVar, setFunction, obj, value}) {
const labelTitle = convertInput(value)

function handleCheckbox() {
    setFunction(!stateVar)
    obj[value]= !stateVar
}

    return (
        <label 
        htmlFor= {value}>{labelTitle}: {" "}
            <input
            id = {value}
            type = "checkbox"
            checked = {stateVar}
            onChange = {() => handleCheckbox()}
             />
        </label>
    );
}

export default CheckboxInput;