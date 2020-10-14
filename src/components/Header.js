import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';


const Header = ({ isSignedIn })=>{
   

      const renderKey = ()=>{
          if(isSignedIn){
             
          return (
            <div className="right menu">
            <Link to="/mykey" className="item">
                View your streaming key
            </Link>
            <Link to="/streams/new" className="item">
                Create a stream
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
            <GoogleAuth/>
         </div>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return { isSignedIn: state.auth.isSignedIn }
}


export default connect(mapStateToProps) (Header);