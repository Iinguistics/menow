import React from 'react';
import ReactDom from 'react-dom';
import history from '../history';


const Modal = (props)=>{


  const cancel = ()=>{
      history.push('/');
  }


    return ReactDom.createPortal(
     <div onClick={ props.onDismiss } className="ui dimmer modals visible active">
         <div onClick={(e)=>e.stopPropagation()} className=" ui standard modal visible active">
           <div className="header">
               {props.title}
           </div>
           <div className="content">
             {props.content}
           </div>
           <div className="actions">
               <input className="ui button mini black" type="submit" value="Cancel"
               onClick={()=> cancel()}
               />
               <input
                className="ui button mini red" type="submit" value={props.buttonValue}
                onClick={props.action}
                />
           </div>
         </div>
     </div>,
     document.getElementById('modal')
    );
};




export default Modal;