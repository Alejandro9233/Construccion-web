import React from "react";
import { Button, Text, StyledLink, StyledFormItem } from "../elements";
import { Input, Form } from "antd";
import { useState } from "react";


const Signup = () => {
  const [user, setUserDetails] = useState({ 
    name: "", 
    email: "", 
    location: "", 
    department: "", 
    jobPosition: "",
    password: ""});

    const changeHandler = (e) => {
      const { name, value } = e.target;
      setUserDetails((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    };
    
  
    const isDisabled = Object.values(user).some(value => value === "");


  return (
   <div style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "95vh",
    paddingLeft:'25%'}}> 
         <Form 
          validateTrigger="onSubmit"
          autoComplete="off"
          style={{
            display: 'flex', 
            flexDirection:'column', 
            justifyContent:'space-between', 
            gap:'10px',
            width: '450px'
         }}>
          <Text className="title">Create Account</Text>
          <Text className="subtitle">Fill the following spaces with your information</Text>
          <Text>Name*</Text>
          <StyledFormItem
            name="name"
            >
            <Input size="large" placeholder="Enter your name" id="name" name="name" value={user.name} onChange={changeHandler}/>
          </StyledFormItem>
          <Text>Email*</Text>
          <StyledFormItem
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail',
              },
            ]}
            >
          <Input size="large" placeholder="Enter your email" id="email" name="email" value={user.email} onChange={changeHandler}/> 
          </StyledFormItem>
          <Text>Location*</Text>
          <StyledFormItem
            name="location"
            >
            <Input size="large" placeholder="Enter your location" id="location" name="location" value={user.location} onChange={changeHandler}/>
          </StyledFormItem>
          <Text>Department*</Text>
          <StyledFormItem
            name="department"
            >
            <Input size="large" placeholder="Enter your department" id="department" name="department" value={user.department} onChange={changeHandler}/>
          </StyledFormItem>
          <Text>Job Position*</Text>
          <StyledFormItem
            name="jobPosition"
            >
            <Input size="large" placeholder="Enter your job position" id="jobPosition" name="jobPosition" value={user.jobPosition} onChange={changeHandler}/>
          </StyledFormItem>
          <Text>Password*</Text>
          <StyledFormItem
            name="password"
            rules={[
              {
                validator(rule, value) {
                  return new Promise((resolve, reject)=> {
                    if(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{7,})/.test(value)){
                      resolve();
                    }
                    else {
                      reject("Password must be a minimum of 7 characters, have at least one uppercase letter and one special character")
                    }
                  })
                }
              }
            ]}
            >
            <Input.Password size="large" placeholder="Enter your password" id="password" name="password" value={user.password} onChange={changeHandler}/>
          </StyledFormItem>
          <StyledFormItem>
            <Button disabled={isDisabled} type="primary" size="large" htmlType="submit">Create Account</Button>
          </StyledFormItem>
          <StyledLink to="/login">Back to login</StyledLink>
         </Form>
        
         </div>
  );
};

export default Signup;
