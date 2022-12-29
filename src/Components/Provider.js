import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";

// Context obj to consume data
export const ContextData = createContext()


function Provider({children}) {
    const API = process.env.REACT_APP_API_URL
    // declare state to hold unaltered dataArr from fetch
    const [logs, setLogs] = useState([])

    useEffect(() => {
        axios.get(`${API}`)
        .then(respJson => setLogs(respJson.data))
        .catch(err => console.log(err))
    },[])

    return (
            <ContextData.Provider value={{
                axios,
                API,
                logs,
                setLogs,
                
            }}>
                <Nav />
                <Footer />
                {children}
            </ContextData.Provider>
            
       
    );
}

export default Provider;