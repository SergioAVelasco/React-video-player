import React from 'react'
import './search.css'

function  Search(props){
    return (
        <form 
            className="Search"
            onSubmit = {props.handleSubmit}
        >
            <input 
                ref = {props.setRef}
                placeholder="Busca tu video favoritos" 
                type="text" 
                className="Search-input" 
                name = "search"
                onChange = {props.handleChange}
                value =  {props.value}
            />
        </form>
    )
}

export default Search;