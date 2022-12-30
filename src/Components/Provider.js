import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
// Context obj to consume data
export const ContextData = createContext()

function Provider({children}) {
    const API = process.env.REACT_APP_API_URL

    return (
            <ContextData.Provider value={{
                axios,
                API, 
            }}>
                <Nav />
                <Footer />
                {children}
            </ContextData.Provider>
    );
}

export default Provider;