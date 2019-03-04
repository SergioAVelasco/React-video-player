import React from 'react'
import Figura from './../../icons/component/figure'
import './volume.css'
 
function Volume(props){
    return(
        <button className= "Volume">
            <div onClick = {props.muteTogle}>
                {
                    props.muted?
                    <Figura.Volume 
                        color = "grey"
                        size = {25}
                    />
                    :
                    <Figura.Volume 
                        color = "white"
                        size = {25}
                    />
                }                
            </div>
            <div className="Volume-range">
                <input 
                    type="range" 
                    min = {0}
                    max = {1}
                    step = {.05}
                    onChange = {props.handleChangeVolume}
                />
            </div>
        </button>
    )
}

export default Volume