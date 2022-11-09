import React from 'react'

const validation = (values) => {
    let errors = {};

    if(!values.fullname){
        errors.fullname="Name is requird"
    }
    if(!values.email){
        errors.email="Email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid"
    }
    if(!values.password){
        errors.password= "Ref_code is required";
    } else if(values.password.length < 6){
        errors.password= "Ref_code must be more than 6 characters"
    } else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,64}$/.test(values.password)){
        errors.password="Ref_code must contain upercase, lowercase, number and special character!"
    }
    
     
  return errors;
};

export default validation
