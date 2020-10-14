import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';
import { fetchStreams } from '../actions';


const Header = ({ isSignedIn, streams, currentUserId })=>{
     const [hasStream, setHasStream] = useState(false);

     useEffect(()=>{
        fetchStreams();
        viewStreams();
       }, [streams]);

       const renderCreateStream = ()=>{
            if(hasStream === false && isSignedIn){
                return(
                 <Link to="/streams/new" className="item">
                  Create a stream
                 </Link>
                )
            }
       }


       const renderAdmin =(stream)=>{
        if(stream.userId === currentUserId){
           setHasStream(true);
         }
        }
        
    
        const viewStreams = ()=>{
            if(streams !== null)
            return streams.map((stream)=>{
                return renderAdmin(stream)
            })
         };
         


      const renderKey = ()=>{
          if(isSignedIn){
          return (
            <div className="right menu">
            <Link to="/mykey" className="item">
                View your streaming key
            </Link>
            </div>
         )
       }
     }



    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
               menow
            </Link>
         <div className="right menu">
         <Link to="/" className="item">
               All Streams
            </Link>
            {renderKey()}
            {renderCreateStream()}
            <GoogleAuth/>
         </div>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return { isSignedIn: state.auth.isSignedIn,
             streams: Object.values(state.streams),
             currentUserId: state.auth.userId
    }
}


export default connect(mapStateToProps, { fetchStreams }) (Header);