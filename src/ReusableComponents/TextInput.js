import { convertInput, handleTextChange } from "./helperFunctions"

function TextInput({stateVar, setFunction, value}) {
  const labelTitle = convertInput(value)
  const charLength = stateVar[value].length
    return (
        <label 
        htmlFor= {value}>{labelTitle}: {" "}
            <textarea
            rows= {Math.round(charLength/50)}
            cols={Math.round(charLength/(Math.round(charLength/70)))} 
            wrap="soft" 
            id = {value}
            type = "text"
            value = {stateVar[value]}
            onChange = {(event) => handleTextChange(event, stateVar, setFunction)}
             />
        </label>
        
    );
}

export default TextInput;