import React from 'react';
import './App.css';
import { useFormik } from 'formik';

function App() {



  const formik = useFormik({ //setting initial values of fields
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values => {
      console.log('form: ', values);
      
  },
    validate: values =>{
      let errors = {};
      if(!values.emailField) { 
        errors.emailField = 'Field Required'; 
        
      }//if DNE or invalid, show error
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailField = 'Username should be an email';
       
      }
      if(!values.pswField) {
        errors.pswField = 'Field Required';
        
      }

      if((!errors.emailField)&&(!errors.pswField)) alert('Valid login');

    
     

     
      return errors;
    }


  })
  return (
    <div> 
        <form onSubmit={formik.handleSubmit}>
          <div>Email</div>
          <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
          {formik.errors.emailField ? <div style={{color: 'red'}}>{formik.errors.emailField}</div>: null}
          <div>Password</div>
          <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
          {formik.errors.pswField ? <div style={{color: 'red'}}>{formik.errors.pswField}</div>: null}
          <button type="submit" name="submitBtn">Submit</button>
        </form>

        
    </div>
  );


}

export default App;
