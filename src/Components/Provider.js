import { createContext, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import Footer from "./Footer";
import DeleteModal from "./DeleteModal";
// Context obj to consume data
export const ContextData = createContext()

function Provider({children}) {
    const API = process.env.REACT_APP_API_URL
    const [deleteModal, setDeleteModal] = useState(false)
    const [modalIndex, setModalIndex] = useState("")
    // move logs state here due to sort dropdown interference
    const [logs, setLogs] = useState([])
    // move select state here so can check value in logsShow component
    const [select, setSelect] = useState("default")
    // declare state for query value for editform 
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${API}`)
        .then(respJson => setLogs(respJson.data))
        .catch(err => navigate("/*"))
    },[])

    return (
            <ContextData.Provider value={{
                axios,
                API,
                deleteModal,
                setDeleteModal,
                modalIndex,
                setModalIndex,
                logs, 
                setLogs,
                select,
                setSelect,
                query,
                setQuery, 
            }}>
                <Nav />
                <Footer />
                {deleteModal && <DeleteModal />}
                {children}
            </ContextData.Provider>
    );
}

export default Provider;