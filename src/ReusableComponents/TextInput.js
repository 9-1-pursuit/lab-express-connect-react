import { convertInput, handleTextChange } from "./helperFunctions"

function TextInput({stateVar, setFunction, value}) {
  const labelTitle = convertInput(value)
  const charLength = stateVar[value].length
  
    return (
        <label 
        htmlFor= {value}>{labelTitle === "Captain Name" ? "Captain's Name" : labelTitle}: {" "}
            <textarea
            rows= {charLength === 0 ? "2" : Math.round(charLength/50) + 1}
            cols={charLength === 0 ? "40" : Math.round(charLength/(Math.round(charLength/70)))} 
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