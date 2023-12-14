import { useState, useEffect } from "react";
import "../styles/Register.css";
import { FiUser } from "react-icons/fi";
import {AiOutlineUnorderedList} from "react-icons/ai";
import {HiOutlineMail,HiOutlineIdentification} from "react-icons/hi";
import {RiLockPasswordLine} from "react-icons/ri";
import {MdDateRange} from "react-icons/md"

function Register() {
  const initialValues = { username: "", email: "", date: "",cin: "",cne: "",class:"",password: "", confirm:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required !";
    }
    if (!values.date) {
        errors.date = "Date is required !";
      }
      if (!values.cin) {
        errors.cin = "CIN is required !";
      }
      if (!values.cne) {
        errors.cne = "CNE is required !";
      }
      if (!values.class) {
        errors.class = "Class is required !";
      }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required !";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    
    if (!values.confirm) {
        errors.confirm = "Confirmation is required ! ";
      } else if (values.confirm !== values.password) {
        errors.confirm= "The password isn't correct !";
      }




    
    return errors;
  };
  return(
   
   <div className="rbody">
    <div className="rcontainer">
           { /* Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      ) */}

    <div className="rforms">
  <div className="form signup">
                  <span className="title">Registration</span>
  
                  <form onSubmit={handleSubmit}>
                      <div className="input-field">
                    <FiUser/><input type="text" name="username" value={formValues.username} placeholder="Enter your name" onChange={handleChange} required/>
                    </div>
                    <p className="alert">{formErrors.username}</p>    
                     
                      <div className="input-field">
                     <HiOutlineMail/><input type="text" name="email" value={formValues.email} placeholder="Enter your email" onChange={handleChange} required/>
               
                      </div> <p className="alert">{formErrors.email}</p>
                      <div className="input-field">
                      <MdDateRange/><input type="date" name="date" value={formValues.date} placeholder="Enter your birthday" onChange={handleChange}  required/>
                      </div>
                      <p className="alert">{formErrors.date}</p>  
                    
                      <div className="input-field">
                      <HiOutlineIdentification/><input type="text" value={formValues.cin}  name="cin" placeholder="Enter your CIN" onChange={handleChange} required/>
                      </div>
                      <p className="alert" >{formErrors.cin}</p>
                     
                      <div className="input-field">
                     <HiOutlineIdentification/><input type="text" value={formValues.cne} name="cne" placeholder="Enter your CNE" onChange={handleChange}  required/>
                     </div>
                     <p className="alert">{formErrors.cne}</p> 
                      
                      <div className="input-field">
                        <AiOutlineUnorderedList/>   <select name="class" type="text" value={formValues.class} onChange={handleChange}  required>
                        
                               <option value="" disabled selected>Enter your class </option>
                                <option value="cp1">CP 1</option>
                                <option value="CP2">CP 2</option>
                                <option value="CI1">CI 1</option>
                                <option value="CI2">CI 2</option>
                                <option value="CI3">CI 3</option>
                                 </select> 
        
                          
                      </div> 
                      <p className="alert">{formErrors.class}</p> 
                      <div className="input-field">
                      <RiLockPasswordLine/><input type="password" name="password" value={formValues.password} class="password" placeholder="Create a password" onChange={handleChange}  required/>
                          
                      </div>
                      <p className="alert">{formErrors.password}</p> 
                      <div className="input-field">
                      <RiLockPasswordLine/><input type="password" name="confirm" value={formValues.confirm} class="password" placeholder="Confirm a password" onChange={handleChange} required/>
                      
                      </div>
                      <p className="alert">{formErrors.confirm}</p> 
  <br></br>
                          <div>
                          <span className="text">Already have an account ?
                        <a href="./login" class="text signup-link"> Sign In</a>
                    </span>
                      </div>   
                      <div className="input-field button">
                      <input type="button" onClick={handleSubmit} value="Submit"/>
                      </div> <br></br>
                      
                      {  Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="message">Signed in successfully ! </div>
      ) : (
        <pre></pre>
      ) }
              
                  </form>
                  </div>
              </div>
          </div>
      </div> );
  }

export default Register;
