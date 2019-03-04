import React from 'react'
import Figura from './../../icons/component/figure'
import './full-screen.css'

function FullScreen(props){
    return(
        <div 
            onClick = {props.handleFull}
            className = "FullScreen" >
            <Figura.FullScreen
                color = {"white"}
                size = {25}
            />
        </div>
    )
}

export default FullScreen;