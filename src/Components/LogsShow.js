import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ContextData } from './Provider';
import BackButton from '../ReusableComponents/BackButton';
import './LogsShow.css'
import { displayLogs } from '../ReusableComponents/helperFunctions';
import picard from './assets/Picard.jpeg'
import sarahlance from './assets/Sara-Lance.jpg'
import ahab from './assets/Ahab.jpg'
import hansolo from './assets/Han-Solo.png'
import crunch from './assets/Crunch.png'
import hook from './assets/Hook.png'
import jacksparrow from './assets/Jack-Sparrow.png'
import morgan from './assets/Morgan.png'
import kirk from './assets/Kirk.png'
import unknownUser from './assets/unknownUser.png'

function LogsShow() {
    const {API, axios, setDeleteModal, setModalIndex, select, logs} = useContext(ContextData)
    const {index} = useParams()
    const navigate = useNavigate()
    const [thisLog, setThisLog] = useState({})
    
    function pic(name){
        const nameLower = thisLog.captainName.split(` `).join(``).toLowerCase()
        if(nameLower === `picard`) return picard
        if(nameLower === `sarahlance`) return sarahlance
        if(nameLower === `ahab`) return ahab
        if(nameLower === `crunch`) return crunch
        if(nameLower === `hook`) return hook
        if(nameLower === `morgan`) return morgan
        if(nameLower === `hansolo`) return hansolo
        if(nameLower === `kirk`) return kirk
        if(nameLower === `jacksparrow`) return jacksparrow
        else{
            return unknownUser
        }
    }
    // function to handle delete button
    function handleDeleteButton() {
        setModalIndex(index)
        setDeleteModal(true)
    }

    useEffect(() => {
        if(select !== "default"){
            axios.get(`${API}`)
            .then(respJson =>  setThisLog(displayLogs(select, respJson.data)[index]))
        }
        else{
            axios.get(`${API}/${index}`)
            .then(respJson => setThisLog(respJson.data))
            .catch(err => navigate("/*"))
        }
    }, [])

    return (
        <div className='show'>
            <h2>CAPTAIN'S LOG # {index}</h2>
            {
                Object.keys(thisLog).length &&
                <>
                <div className="logProfile">
                    <img src = {pic(thisLog.captainName)} alt = {thisLog.captainName} />
                    <p> Captain {thisLog.captainName}</p>
                </div>
                <div className='entry'>
                    <h3>{thisLog.title}</h3>
                    <p>{thisLog.post}</p>
                    <p>
                        <span>Days Since Last Crisis: </span> {thisLog.daysSinceLastCrisis}
                    </p>
                </div>
                </>
            }
            <div className='buttons'>
                <BackButton />
                <Link to ={`/logs/${index}/edit`}>
                    <button>Edit</button>
                </Link>
                <button onClick = {() => handleDeleteButton()}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default LogsShow;