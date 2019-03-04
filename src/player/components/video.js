import React,{Component} from 'react'
import './video.css'

class Video extends Component{
    tooglePlay = () => {
        if(this.props.pause)
            this.video.play()
        else 
            this.video.pause()
    }
    setRef = (element) => {
        this.video = element;
    }
    componentWillReceiveProps(newProps){
        if(newProps.pause != this.props.pause){
            this.tooglePlay()
        }
    }
    render(){
        const{
            onLoadedMetadata, 
            onTimeUpdate,
            handleSeeking,
            handleSeeked
        } = this.props;
        return (
            <div className="Video">
                <video 
                    autoPlay = {this.props.autoplay}
                    src = {this.props.src} 
                    ref = {this.setRef}
                    onLoadedMetadata = {onLoadedMetadata}
                    onTimeUpdate = {onTimeUpdate}
                    onSeeking = {handleSeeking}
                    onSeeked = {handleSeeked}
                />
            </div>

        )
    }
}

export default Video