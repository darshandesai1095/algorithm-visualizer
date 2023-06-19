import delay from "./delay"

const sequenceHighlight = async (length, setActiveIndex, delayMilliSeconds) => {
    for (let i=0; i<length; i++) {
        setActiveIndex([i]) 
        await delay(delayMilliSeconds)     
    }
    
    setActiveIndex([]) 
}

export default sequenceHighlight