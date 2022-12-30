import { convertInput, handleTextChange } from "./helperFunctions"

function TextInput({stateVar, setFunction, value}) {
  const labelTitle = convertInput(value)
    
    return (
        <label 
        htmlFor= {value}>{labelTitle}: {" "}
            <input
            id = {value}
            type = "text"
            value = {stateVar.value}
            onChange = {(event) => handleTextChange(event, stateVar, setFunction)}
             />
        </label>
        
    );
}

export default TextInput;