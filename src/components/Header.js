import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';

const Header = ({ isSignedIn })=>{

   const renderCreateStream = ()=>{
       if(isSignedIn){
           return(
               <div className="right menu">
                   <Link to="/streams/new" className="item">
                     Create new stream
                 </Link>
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
            {renderCreateStream()}
            <GoogleAuth/>
         </div>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return {isSignedIn: state.auth.isSignedIn}
}


export default connect(mapStateToProps) (Header);