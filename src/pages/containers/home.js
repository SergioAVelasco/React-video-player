import React, {Component} from  'react';  
import HomeLayout from '../components/home-layout'
import Collections from '../../collections/collection'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayerLayout from './../../player/containers/video-player'
class Home extends Component{
    state = {
        handleError : false,
    }
    handleOpenModal = (media) => {
        this.setState({
            modalVisible:true,
            media
        })
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisible:false,
        })
    }
    render(){
        return(
            <HandleError>
                <HomeLayout>
                    <Related />

                    <Collections 
                    data = {this.props.data }
                    handleClick = {this.handleOpenModal}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                        <Modal
                            handleClick = {this.handleCloseModal}
                        >   
                            <VideoPlayerLayout  
                            autoplay
                            src = {this.state.media.src}
                            title = {this.state.media.title}
                            />
                        </Modal>
                        </ModalContainer>
                    }
                </HomeLayout >
            </HandleError>
         );
    }
}

export default Home;