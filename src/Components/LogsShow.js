import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ContextData } from './Provider';
import './LogsShow.css'
import picard from './assets/Picard.jpeg'
import sarahlance from './assets/Sara-Lance.jpg'
import ahab from './assets/Ahab.jpg'
import hansolo from './assets/Han-Solo.png'
import crunch from './assets/Crunch.png'
import hook from './assets/Hook.png'
import jacksparrow from './assets/Jack-Sparrow.png'
import morgan from './assets/Morgan.png'
import kirk from './assets/Kirk.png'

function LogsShow() {
    const {API, axios} = useContext(ContextData)
    const {index} = useParams()
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
    }
    
    useEffect(() => {
        axios.get(`${API}/${index}`)
        .then(respJson => setThisLog(respJson.data)
        )
        .catch(err => console.log(err))
    }, [])

    return (
        <div className='show'>
            <h2>SHOW</h2>
            {
                Object.keys(thisLog).length &&
                <>
                <div className="logProfile">
                    <img src = {pic(thisLog.captainName)} alt = {thisLog.captainName} />
                    <p>{thisLog.captainName}</p>
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
        </div>
    );
}

export default LogsShow;