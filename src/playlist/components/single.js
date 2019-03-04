
import React, { Component } from 'react'; 
import './single.css';
import PropTypes from 'prop-types';


class Single extends Component{
    state = {
        author:this.props.author
    }
    handleClick = (event) => {
        this.props.openModal(this.props)
    }
    render(){
        const { title, author, cover } = this.props;
        return (
            <div className="Media" onClick={this.handleClick}> 
                <div className="Media-cover"> 
                    <img
                        className = "Media-image"
                        src = {cover}
                        alt = "" 
                        width = {240} 
                        height = {160} 
                    />
                    <h3 className="Media-title" >{title}</h3>
                    <p className="Media-author" >{author}</p>
                </div>
            </div>
        )
    }
}

Single.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string.isRequired,
    cover: PropTypes.string, 
    type: PropTypes.oneOf(['video','audio']),
}

export default Single;