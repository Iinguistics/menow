import React, { useEffect } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { deleteStream, fetchStream } from '../../actions';
import history from '../../history';




const StreamDelete = (props)=>{

    useEffect(()=>{
        if(props.isSignedIn){
            if(props.stream.userId === props.currentUserId){
            props.fetchStream(props.match.params.id);
            }
        }else{
            history.push('/');
        }
        },[]);


    const removeStream = ()=>{
        props.deleteStream(props.match.params.id);
  };
  
   // when cancel button is hit
    const onDismiss = ()=>{
    history.push('/')
  }

  const renderDelete = ()=>{
      if(props.stream){
        return(
                <Modal 
                title={"Delete Stream"}
                content={`Are you sure you want to delete ${props.stream.title}?`}
                buttonValue={"Delete"}
                onDismiss={onDismiss}
                action={removeStream}
                />
        )
      }
  }
    return (
        <div>
         {renderDelete()}
        </div>
    );
};


const mapStateToProps = (state, ownProps)=>{
    return  { stream: state.streams[ownProps.match.params.id],
              isSignedIn: state.auth.isSignedIn,
              currentUserId: state.auth.userId
    }
};



export default connect(mapStateToProps, { deleteStream, fetchStream }) (StreamDelete);