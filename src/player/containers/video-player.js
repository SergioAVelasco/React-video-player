import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout';
import PlayPause from './../components/play-pause'
import Video from './../components/video'
import Title from './../components/title'
import Timer from './../components/timer'
import VideoPlayerControls from './../components/video-player-controls'
import ProgresBar from './../components/progress-bar'
import Spinner from './../components/spinner'
import Volume from './../components/volume'
import FScreen from './../components/full-screen'

class VideoPlayer extends Component {
    state = {
        pause:true,
        duration: 0,
        currentTime: 0, 
        loading : false,
        muted : false, 
        currentVolume : 0
    }
    leftPad = number => {
        const pad = '00'; 
        return pad.substring(0,pad.length - number.length) + number;
    }
    formatedTime = seconds => {
        const minutesCalc = parseInt(seconds/60,10);
        const secondsCalc = parseInt(seconds%60,10);
        return `${minutesCalc}:${this.leftPad(secondsCalc.toString())}`
    }
    handleToggleClick = (event) =>(
        this.setState({
            pause: !this.state.pause
        })
    )
    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }
    handleLoadedMetadata = event =>{
        this.video = event.target
        this.setState({
            duration :this.video.duration
        });
    }
    handleTimeUpdate = event =>{
        this.setState({
            currentTime : this.video.currentTime
        });
    }
    handleProgressChange = event =>{
        this.video.currentTime = event.target.value; 
    }
    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }
    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }
    handleChangeVolume = event =>{
        this.video.volume = event.target.value
    }
    muteTogle = event =>{
        this.setState({
            muted: !this.state.muted,
        },()=>{
            if(this.state.muted)
            {
                this.setState({
                    currentVolume : this.video.volume
                })
                this.video.volume = 0;
            }
            else {
                this.video.volume = this.state.currentVolume
            }
        })
        
    }
    handleFull = (event)=>{
        if(!document.webkitIsFullScreen){
            this.player.webkitRequestFullScreen()
        }
        else{
            document.webkitExitFullscreen()
        }
    }
    setRef = element =>{
        this.player = element
    }
    render(){
        return (
                <VideoPlayerLayout
                    setRef = {this.setRef}
                >
                    <Title 
                        title = {this.props.title
                        }
                    />
                    <VideoPlayerControls>
                        <PlayPause 
                            pause = {this.state.pause}
                            handleClick = {this.handleToggleClick}
                        />
                        <Timer 
                            duration = {this.formatedTime(this.state.duration)}
                            currentTime = {this.formatedTime(this.state.currentTime)}
                        />
                        <ProgresBar
                            duration = {this.state.duration}
                            currentTime = {this.state.currentTime}
                            handleProgressChange = {this.handleProgressChange}
                        />
                        <Volume
                            muteTogle = {this.muteTogle}
                            handleChangeVolume = {this.handleChangeVolume}
                            muted = {this.state.muted}
                        />
                        <FScreen
                            handleFull = {this.handleFull}
                        />
                    </VideoPlayerControls>
                    <Spinner 
                        active = {this.state.loading}
                    />
                    <Video 
                        autoplay = {this.props.autoplay}
                        pause = {this.state.pause}
                        src = {this.props.src}
                        onLoadedMetadata = {this.handleLoadedMetadata}
                        onTimeUpdate = {this.handleTimeUpdate}
                        handleSeeking = {this.handleSeeking}
                        handleSeeked = {this.handleSeeked}
                    />
                </VideoPlayerLayout>
                )
            }
        }
        
export default VideoPlayer;