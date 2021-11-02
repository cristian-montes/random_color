import React from "react";

const RandomDisplay = ({ showingColor}) => {
    
    return(
    <div>
        <h1>The random color generator</h1>
        <div
            style={{ 
                backgroundColor: showingColor,
                height: 400,
                width: 400,
                marginTop: 20,
            }}
        >
        </div>
    </div>
    )
}

export default RandomDisplay;