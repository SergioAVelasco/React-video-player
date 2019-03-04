
import React from 'react'
import Play from './../../icons/component/figure'
import './play-pause.css'

function PlayPause(props){
    return (
        <div className = "PlayPause">
            {
                props.pause?
                <button 
                    className = "PlayPausebutton"
                    onClick = {props.handleClick}
                >
                    <Play.Play 
                        size = {25}
                        color = {"white"}
                    />
                </button>
                :
                <button 
                    className = "PlayPausebutton"
                    onClick = {props.handleClick}
                >
                    <Play.Pause 
                        size = {25}
                    color = {"white"}
                    />
                </button>
            }
        </div>
    )
}

export default PlayPause;