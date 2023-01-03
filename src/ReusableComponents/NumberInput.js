import { convertInput, handleTextChange } from "./helperFunctions";

function NumberInput({stateVar, setFunction, value}) {
    const labelTitle = convertInput(value)
    
    return (
        <label 
        htmlFor= {value}>{labelTitle}: {" "}
            <input
            id = {value}
            type = "number"
            value = {stateVar[value]}
            onChange = {(event) => handleTextChange(event, stateVar, setFunction)}
             />
        </label>
    );
}

export default NumberInput;