// function for handling for input changes
function handleTextChange(e, stateVar, setFunction) {
    let value = e.target.value
    const id = e.target.id
    if(id === "daysSinceLastCrisis"){
                value = +e.target.value
            }
    setFunction({...stateVar, [id]: value})
}

    // function for converting inputted string for label/ inputs
    function convertInput(input){
        input.trim()
        const newInput = `${input.charAt(0).toUpperCase()}${input.slice(1)}`
        // https://bobbyhadz.com/blog/javascript-split-by-capital-letter#:~:text=Split%20a%20String%20on%20Capital%20Letters%20in%20JavaScript%20%23,an%20array%20of%20the%20substrings.
        return newInput.split(/(?=[A-Z])/).join(` `)
    }




export  {
    handleTextChange,
    convertInput,
}