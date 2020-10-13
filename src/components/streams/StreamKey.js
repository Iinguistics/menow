import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';


const StreamKey = (props)=>{

   // when cancel button is hit
    const onDismiss = ()=>{
    history.push('/')
  }

  
  const renderKey = ()=>{
        if(props.isSignedIn === true){
            return(
                <div>
                    <h2>Your stream key is: {props.currentUserId} <br/></h2>
                    <p>Enter your stream key in OBS.</p>
                    <input
                    className="ui button mini black"
                    type="submit"
                    value="Got it"
                    onClick={ ()=> onDismiss() }
                    />
                </div>
            )
            }else if(props.currentUserId === undefined){
               return <div>Loading...</div>
        }else{
            history.push('/');
        }
     
    
  }

  
    return (
        <div>
         {renderKey()}
        </div>
    );
};


const mapStateToProps = (state)=>{
    return  { 
              isSignedIn: state.auth.isSignedIn,
              currentUserId: state.auth.userId
            }
};



export default connect(mapStateToProps) (StreamKey);