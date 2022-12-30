import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
import DeleteModal from "./DeleteModal";
// Context obj to consume data
export const ContextData = createContext()

function Provider({children}) {
    const API = process.env.REACT_APP_API_URL
    const [deleteModal, setDeleteModal] = useState(false)

    return (
            <ContextData.Provider value={{
                axios,
                API,
                deleteModal,
                setDeleteModal, 
            }}>
                <Nav />
                <Footer />
                {deleteModal && <DeleteModal />}
                {children}
            </ContextData.Provider>
    );
}

export default Provider;