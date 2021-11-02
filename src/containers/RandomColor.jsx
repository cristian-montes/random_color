import React, { Component } from 'react';
import RandomDisplay from '../components/color-selector/RandomDisplay.jsx'

class RandomColor extends Component {
 state = {
     showingColor: 'pink',
 };

 
//  changeColorState = (color) => {
//      const wildNumber = Math.floor(Math.random()* color.length);
//      const ranColor = color[wildNumber];
//      console.log(ranColor);
//      this.setState({ showingColor: ranColor })
//      console.log({showingColor})
//     };
    
componentDidMount(){
    setInterval(() => {
        const colores = ['red', 'yellow', 'blue', 'green', 'violet', 'teal', 'gold'];
        const wildNumber = Math.floor(Math.random()* colores.length);
             const ranColor = colores[wildNumber];
             console.log(ranColor);
             this.setState({ showingColor: ranColor })
    }, 1000)
}





render() {   
    const { showingColor } = this.state;
    return(
        <div>
            <h1>The random color generator</h1>
            <RandomDisplay showingColor = {showingColor}/>

        </div>
    )
}
 
}

export default RandomColor;