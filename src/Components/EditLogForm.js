import React from 'react';
import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import Logs from './Logs';
const API = process.env.REACT_APP_API_URL


const EditLogForm = () => {
    let { index } = useParams();
    const navigate = useNavigate()
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        days: "",
        mistakes: false,
    })

    const handleTextChange = (event) => {
        setLog({...log, [event.target.id]: event.target.value})
    }
    const handleCheckBox = ()=>{
        setChecked(!checked)  //updates checkbox state
        log.mistakes=!checked 
    }
    const[checked, setChecked] = useState(false)

    useEffect(() => {
        axios
        .get(`${API}/logs/${index}`)
        .then((res) => setLog(res.data))
        .catch(err => console(err))
      }, [index]);

    const handleSubmit = (event) => {
        event.preventDefault()     
        axios
        .put(`${API}/logs/${index}`,log)
        .then((res) => {
            setLog(res.data)
            navigate(`/logs/${index}`)
        })
        .catch(err => console(err))
        }

    return (
        <div>
           <br/><br/>
            <form onSubmit={handleSubmit} className='editLogForm'>
                <label htmlFor="captainName">Captain's Name:</label>
                <input
                id="captainName"
                value={log.captainName}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter name of captain"
                required
                />
                <br/>

                <label htmlFor="title">Title:</label>
                <input
                id='title'
                value={log.title}
                type="text"
                onChange={handleTextChange}
                placeholder="Enter title"
                required
                />
                <br/>

                <label htmlFor="post">Post:</label>
                <input
                id="post"
                name="post"
                value={log.post}
                type="text"
                placeholder="Enter a post here"
                onChange={handleTextChange}
                
                />
                <br/><br/>

                <label htmlFor="days">Days Since Last Crisis:</label>
                <input
                id="daysSinceLastCrisis"
                value={log.daysSinceLastCrisis}
                type="text"
                name="daysSinceLastCrisis"
                placeholder="Enter number of days since the last crisis occurred"
                onChange={handleTextChange}
                />
                <br/><br/>
                
                <label htmlFor="mistakes">Mistakes were made today:</label>
                <input
                id="mistakes"
                checked={log.mistakes}
                type="checkbox"
                onChange={handleCheckBox}
                />
                <br/> <br/>
                <input type="submit" value="Save"/>  
                <Link to={`/logs`} className='cancelLink'><button className='cancelEditButton'>Cancel</button>
                </Link> 

            </form>  
   
        </div>
    );
};

export default EditLogForm;

// redirects to "edited log" instead of Logs.
{/* <Link to={`/logs/${index}`} className='cancelLink'><button className='cancelEditButton'>Cancel</button>
</Link>  */}