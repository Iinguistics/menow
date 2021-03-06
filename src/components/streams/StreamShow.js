import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import flv from 'flv.js';


class StreamShow extends React.Component{
    constructor(props){
        super(props);
       this.videoRef = React.createRef();
    }

    componentDidMount(){
      this.props.fetchStream(this.props.match.params.id);
      this.buildPlayer();
    }

    componentDidUpdate(){
        this.buildPlayer();
    }

    componentWillUnmount(){
        this.player.destroy();
    }
    

       buildPlayer(){
        if(this.player || !this.props.stream){
            return;
        }
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${this.props.currentUserId}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
        // flvPlayer.play();
    }


       renderStream = ()=>{
        if(this.props.stream){
            return (
                <div>
                   <h2>{this.props.stream.title}</h2> 
                   <h5>{this.props.stream.description}</h5>
                </div>
            )
        }
    }


  render(){


    return(
        <div>
            <video ref={this.videoRef} style={{width:'100%'}} controls={true} />
           {this.renderStream()}
        </div>
    )
  }
}


const mapStateToProps = (state, ownProps)=>{
    return { stream: state.streams[ownProps.match.params.id],
             currentUserId: state.auth.userId
           }
}

export default connect(mapStateToProps, { fetchStream }) (StreamShow);