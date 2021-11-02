import React, { Component } from 'react';
import RandomDisplay from '../components/color-selector/RandomDisplay.jsx'


class RandomColor extends Component {
    state = {
        showingColor: 'pink',
    };

    generateRandomColor(){
        const colores = ['red', 'yellow', 'blue', 'green', 'violet', 'teal', 'gold', 'fusia', 'Android green', 'Almond', 'Aquamarine'];

        const wildNumber = Math.floor(Math.random()* colores.length);

        return colores[wildNumber];
    }

    
    componentDidMount(){
        setInterval(() => {     
                this.setState({ showingColor: this.generateRandomColor() })
        }, 1000)
    }





    render() {   
        const { showingColor } = this.state;
        return(
            <div>
                <RandomDisplay showingColor = {showingColor}/>

            </div>
        )
    }
 
}

export default RandomColor;