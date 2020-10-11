import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';


class StreamForm extends Component {
    
    renderError = ({ error, touched })=>{
       if(error && touched){
           return(
               <div className="ui error message">
                   <div className="header">
                       {error}
                   </div>
               </div>
           )
       }
   }


     renderInput = ({input, label, meta})=>{
        const errClass = `field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={errClass}>
                <label>{label}</label>
              <input 
                onChange={input.onChange}
                value={input.value}
                
                />
                {this.renderError(meta)}
            </div>
           )
         };
         
        
           
        
          onSubmit = (formValues)=>{
             this.props.onSubmit(formValues);
         }

        

   
        render(){
        return (
            <form 
             onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
              <Field name="title" component={this.renderInput} label="Enter title"/>
              <Field name="description" component={this.renderInput} label="Enter description"/>
              <button className="ui button primary mini">Submit</button>
            </form>
        )
      }
    };

// errors.title will get passed onto the field with name title, it will then get passed onto the renderIput function, same thing happens with title
// validate function gets passed to redux form under its validate: key.
// so then the errors obj which gets returned in this function is under the meta..formValues.meta,(the main redux-form obj) destructure out on renderInput function so you can access meta.error
const validate = (formValues) =>{
    const errors = {};
    if(!formValues.title){
    errors.title = 'You must enter a title';
    }
    if(!formValues.description){
        errors.description = 'You must enter a description';
        }
        return errors;
 };


export default reduxForm({
    form: 'streamForm',
    validate: validate
}) (StreamForm);


