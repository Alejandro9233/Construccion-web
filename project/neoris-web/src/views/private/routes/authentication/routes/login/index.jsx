import React from "react";
import { Divider, Checkbox, Input } from "antd";
import { useState } from "react";
import { Button, Text, StyledLink } from "./elements";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isDisabled = email === "" || password === "";

  return (
      <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "90vh",
          paddingLeft:'250px'}}>
        <div style={{display: 'flex', 
                    flexDirection:'column', 
                    justifyContent:'space-between', 
                    gap:'10px'}}>
        <Text className="title">Sign in</Text>
        <Text className="subtitle">Enter your email and password to sign in!</Text>
        <Button type="primary" size="large">gogle</Button>
        <Divider>Or</Divider>
        <Text>Email*</Text>
        <Input size="large" placeholder="Enter your email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <Text>Password*</Text>
        <Input.Password size="large" placeholder="Enter your password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Checkbox><Text className="text">Keep me logged in?</Text></Checkbox>
          <StyledLink to="/recover">Forgot password</StyledLink>
        </div>
        <Button type="primary" disabled={isDisabled} size="large">Sign in</Button>
        <p style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          Not registered yet? 
          <StyledLink to="/signup">
            Create an account
          </StyledLink>
        </p>
        </div>
        <footer style={{position:'absolute', bottom:'0', paddingBottom:'10px'}}><Text className="subtitle">© 2024 NEORIS UI. All Rights Reserved. Made with love by ITESM!</Text></footer>
      </div>  
  );
};

export default Login;
