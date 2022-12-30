import "./DeleteModal.css"

function DeleteModal() {
    return (
        <>
        <div className="overlay" />
        <div className="deleteModal">
            <h3>Are You Sure You Want To Permanently Delete This Log?</h3>
            <span>
                <button>
                    Delete Log
                </button>
                <button>
                        Go Back
                </button>
            </span> 
        </div>
     </>
        
    );
}

export default DeleteModal;