import React, { Component } from 'react';
import RandomDisplay from '../components/color-selector/RandomDisplay.jsx'

class RandomColor extends Component {
 state = {
     showingColor: 'red',
 };

 changeColorState = (colores) => {
     this.setState({ showingColor: colores })
 };

render(){
    const colores = ['red', 'yellow', 'blue', 'green', 'violet', 'teal', 'gold'];
    const { showingColor } = this.state;
    return(
        <>
            <h1>The random color generator</h1>
            {/* <SmartColor/> */}
            <RandomDisplay showingColor={showingColor}/>

        </>
    )
}
 
}

export default RandomColor;