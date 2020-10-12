import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';

  const StreamList = ({ fetchStreams, deleteStream, streams, currentUserId })=>{

    useEffect(()=>{
    fetchStreams();
   }, []);



   const renderAdmin =(stream)=>{
    if(stream.userId === currentUserId){
        return (
        <div className="right floated content"> 
           <Link to={`/streams/edit/${stream.id}`} className="ui button black mini">Edit</Link>

           <Link to={`/streams/delete/${stream.id}`} className="ui button red mini">Delete</Link>
        </div>
        
        )
     }
    }

    const viewStreams = ()=>{
        if(streams !== null)
        return streams.map((stream)=>{
            return <div key={stream.id} className="item">
                {renderAdmin(stream)}
                <i className="large middle aligned icon camera"/>
                <div className="content">
                <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>
                </div>
                <div className="description">
                    {stream.description}
                </div>
            </div>
        })
     };


    return(
        <div>
            <h2>Streams</h2>
           <div className="ui celled list">
            {viewStreams()}
           </div>
        </div>
    )
};

const mapStateToProps = (state)=>{
    // turn object into array
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId
    };   
}


export default connect(mapStateToProps, { fetchStreams, deleteStream }) (StreamList);