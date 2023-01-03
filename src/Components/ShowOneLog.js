import React from 'react';
import { Link } from 'react-router-dom'

// import fav


const ShowOneLog = ({log, index}) => {
    return (
        <>

            <tr className='logList'>
                {/* test */}
                <td className='logName'> {log.captainName} </td>
                <td className='logTitle'><Link to={`/logs/${index}`}> {log.title} </Link></td>
                <td className='logMistakes'> Mistakes 
                    {log.mistakes  ? (<span>👺💥</span>) : ("🌈🌞")}
            </td>
            </tr>  
            </>  
    );
};

export default ShowOneLog;
{/* <td> Mistakes? {log.mistakes ? "Y" : "N"}</td> */}
{/* Link replaces a href tag when it comes to linking to other pages - use it the same way */}
{/* <span>&nbsp; &nbsp; &nbsp;</span> 🗓🌈*/}