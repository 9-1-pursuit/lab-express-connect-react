import TextInput from "./TextInput";
import NumberInput from "./NumberInput";
import CheckboxInput from "./CheckboxInput";

function FormInputs({stateVar, setFunction, checkboxVar, setCheckboxFunction}) {

    return (
        <div className="formInputs">  
            <TextInput
            stateVar = {stateVar}
            setFunction = {setFunction}
            value = {"captainName"} />
            <br></br>
            
            <TextInput
            stateVar = {stateVar}
            setFunction = {setFunction}
            value = {"title"} />
            <br></br>

            <TextInput
            stateVar = {stateVar}
            setFunction = {setFunction}
            value = {"post"} />
            <br></br>
            
            <CheckboxInput 
            stateVar = {checkboxVar}
            setFunction = {setCheckboxFunction}
            obj = {stateVar}
            value = {"mistakesWereMadeToday"}/>
            <br></br>

            <NumberInput
            stateVar = {stateVar}
            setFunction = {setFunction}
            value = {"daysSinceLastCrisis"}/>
            <br></br>
    
            <input
            className="formButton"
            type = "submit" />

        </div> 
    );
}

export default FormInputs;