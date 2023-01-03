import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "./Provider";
import "./DeleteModal.css"

function DeleteModal() {
    const {axios, API, setDeleteModal, modalIndex} = useContext(ContextData)
    const navigate = useNavigate()
    // function for 'go back' button
    function goBack(){
        setDeleteModal(false)
    }
    // function for 'delete log' button 
    function deleteLog() {
        axios.delete(`${API}/${modalIndex}`)
        .then(() => {
            setDeleteModal(false)
            navigate(`/logs`)
        })
        .catch(err => console.log(err))
    }

    return (
        <>
        <div className="overlay" />
        <div className="deleteModal">
            <h3>Are You Sure You Want To Permanently Delete This Log?</h3>
            <span>
                <button onClick={() => deleteLog()}>
                    Delete Log
                </button>
                <button onClick={() => goBack()}>
                        Go Back
                </button>
            </span> 
        </div>
     </>
        
    );
}

export default DeleteModal;