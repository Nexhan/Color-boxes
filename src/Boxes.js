import React, { Component } from 'react'
import Box from "./Box"
import "./Boxes.css"

class Boxes extends Component{
    static defaultProps = {
        numBoxes: 15
    };
    render(){
        const boxes = Array.from ({ length: this.props.numBoxes}).map(()=> (
            <Box />

        ));
        return <div className="Boxes">{boxes}</div>
    }
}

export default Boxes;