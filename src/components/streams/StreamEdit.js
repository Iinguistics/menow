import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import { formValues } from 'redux-form';
import _ from'lodash';
import history from '../../history';

const StreamEdit = (props)=>{
    useEffect(()=>{
        if(props.isSignedIn){
            if(props.stream.userId === props.currentUserId){
            props.fetchStream(props.match.params.id);
            }
        }else{
            history.push('/');
        }
    },[]);
    

   const onSubmit = (formValues)=>{
    props.editStream(props.match.params.id, formValues)
    };
    
   
    const renderEdit = ()=>{
        if(props.stream){
            return(
                <div>
                <h3>Edit {props.stream.title}</h3><br />
                </div>
            )
        }else{
            return <div>Loading</div>
        }
    }

    const cancel = ()=>{
        history.push('/');
    }

    return(
        <div>
          {renderEdit()}
          <StreamForm 
           initialValues={ _.pick(props.stream, 'title', 'description') }
           onSubmit={onSubmit} />
           <br />
            <input className="ui button mini black" type="submit" value="Cancel"
               onClick={()=> cancel()}
               />
        </div>
    )
};

const mapStateToProps = (state, ownProps)=>{
    return  { stream: state.streams[ownProps.match.params.id],
              isSignedIn: state.auth.isSignedIn,
              currentUserId: state.auth.userId
            }
};

export default connect(mapStateToProps, { fetchStream, editStream }) (StreamEdit);