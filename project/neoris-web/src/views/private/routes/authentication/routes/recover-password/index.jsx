import React from "react";
import { Button, Text, StyledLink } from "../elements";
import { Input } from "antd";
import { useState } from "react";

const RecoverPassword = () => {
const [email, setEmail] = useState("");

const isDisabled = email === "";

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "90vh",
      paddingLeft:'25%'}}> 
           <div style={{display: 'flex', 
                      flexDirection:'column', 
                      justifyContent:'space-between', 
                      gap:'20px',
                      width: '450px'}}>
           <Text className="title">Forgot Password</Text>
           <Text className="subtitle">Enter the email address associated with your account and we'll send you a link to reset your password</Text>
           <Text className="text">Email*</Text>
           <Input size="large" placeholder="Enter your email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
           <Button type="primary" size="large" disabled={isDisabled}>Continue</Button>
           <StyledLink to="/login">Back to login</StyledLink>
           </div>
     </div>
  );
};

export default RecoverPassword;
