import React from "react";

const RandomDisplay = ({ showingColor}) => {
    
    return(
        <div
            style={{ 
                backgroundColor: showingColor,
                height: 100,
                width: 100,
                marginTop: 20,
            }}
        >
        </div>
    )
}

export default RandomDisplay;