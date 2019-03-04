import React from 'react'; 
import Single from './single.js'
import './row.css'


function Row(props){
    const collectionArray = props.data.playlist;
    return  (
        <div className='Row'>
            <p className='Row-description'>{props.data.description}</p>
            <h1 className='Row-title'>{props.data.title}</h1>
            {
                collectionArray.map((item)=>
                {
                    return (<Single 
                                {...item} 
                                key = {item.id}
                                openModal = {props.handleClick}
                                />)
                })  
            }
        </div>
    )
}

export default Row;