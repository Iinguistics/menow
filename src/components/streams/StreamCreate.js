import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream, fetchStreams } from '../../actions';
import StreamForm from './StreamForm';
import history from '../../history';


class StreamCreate extends Component {
    constructor(props){
      super(props)
    }

    componentDidMount(){
      this.props.fetchStreams();
      this.viewStreams();
    }
    componentDidUpdate(){
      this.viewStreams();
    }

     
      viewStreams = ()=>{
          if(this.props.streams !== null)
          return this.props.streams.map((stream)=>{
            if(stream.userId === this.props.currentUserId || this.props.isSignedIn !== true){
              return  history.push('/');
            }else{
             return null
            }
          });
       };


  
          onSubmit = (formValues)=>{
            this.props.createStream(formValues);
         }

        

        render(){
        return (
           <div>
               <h3>Create a stream</h3>
               <StreamForm onSubmit={this.onSubmit} />
           </div>
        )
      }
    };



  const mapStateToProps = (state, ownProps)=>{
    return { isSignedIn: state.auth.isSignedIn,
      streams: Object.values(state.streams),
      currentUserId: state.auth.userId
   }
  }


export default connect(mapStateToProps, { createStream, fetchStreams }) (StreamCreate);