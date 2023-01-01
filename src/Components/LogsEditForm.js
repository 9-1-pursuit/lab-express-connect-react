import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import FormInputs from "../ReusableComponents/FormInputs";
import BackButton from "../ReusableComponents/BackButton";
import "./LogsEditForm.css"


function LogsEditForm() {
    const {API, axios, query, logs} = useContext(ContextData)
    const {index} = useParams()
    const navigate = useNavigate()
    const [editForm, setEditForm] = useState({})
    const [checkbox, setCheckbox] = useState(false)
    // declare state to hold value of originalIndex of edited object if sort methods were used
    const [originalIndex, setOriginalIndex] = useState("")

    // handle edit form submit (put req)
    function handleSubmit(e) {
        e.preventDefault()
        const whichIndex = originalIndex ? originalIndex : index
        console.log(whichIndex)
        // axios.put(`${API}/${whichIndex}`, editForm)
        //     .then(() => navigate(`/logs/${index}`))
        //     .catch(err => navigate("/*"))
    }

    useEffect(() => {
        if(query){
            setEditForm(logs[index])
            setCheckbox(logs[index].mistakesWereMadeToday)
            axios.get(`${API}`)
            .then(respJson => {
                // NOT IDEAL IN FUTURE WILL HAVE UNIQUE ID NUMBERS TO FIND THE MATCHING OBJECT FROM DATABASE ONCE THE ORDER IS ALTERED FROM VARIOUS SORTING METHODS (DROPDOWN)
                const match = respJson.data.findIndex(({captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis}) => {
                    const nameMatch = logs[index].captainName === captainName
                    const titleMatch = logs[index].title === title
                    const postMatch = logs[index].post === post
                    const mistakesMatch = logs[index].mistakesWereMadeToday === mistakesWereMadeToday
                    const crisisMatch = logs[index].daysSinceLastCrisis === daysSinceLastCrisis
                    console.log(logs[index].captainName,captainName, titleMatch, postMatch, mistakesMatch, crisisMatch)
                    

                    return nameMatch && titleMatch && postMatch && mistakesMatch && crisisMatch
                })
                setOriginalIndex(match)
            })
            .catch(err => navigate("/*"))
        }
        else{
            axios.get(`${API}/${index}`)
            .then(respJson => {
            setEditForm(respJson.data)
            setCheckbox(respJson.data.mistakesWereMadeToday)})
            .catch(err =>  navigate("/*"))
        }
    },[index])

    return (
        <div className='edit'>
            <h2>EDIT CAPTAIN'S LOG # {index}</h2>
            <form
            onSubmit={(event) => handleSubmit(event)}>
                { editForm.captainName && 
                <FormInputs
                stateVar = {editForm}
                setFunction = {setEditForm}
                checkboxVar = {checkbox}
                setCheckboxFunction = {setCheckbox} />
                }
           </form>
           <BackButton />
        </div>
    );
}

export default LogsEditForm;