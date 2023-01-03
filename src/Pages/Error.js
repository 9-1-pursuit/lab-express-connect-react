import BackButton from "../ReusableComponents/BackButton";

function Error() {
    return (
        <div className="errorPage">
            <h1>Oops! Something Went Wrong!</h1>
            <p>If you were trying to submit a form, go back and make sure all fields are filled out with the appropriate values 
            <br></br>
            <br></br>
            You May have stumbled upon an invalid Route. Check your URL address and try again.
            <br></br>
            <br></br>
            Click on 'About' link above for further assistance
            </p>
            
            <BackButton />
        </div>
    );
}

export default Error;