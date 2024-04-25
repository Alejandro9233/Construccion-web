import React from "react";
import { Divider, Checkbox, Input, Form } from "antd";
import { useState } from "react";
import { Button, Text, StyledLink, StyledFormItem } from "../elements";

const Login = () => {
  const [login, setLoginDetails] = useState({ 
    email: "", 
    password: "" });

  const [error, setError] = useState(null);
  
  const preestablishedValues = {
    username: 'hola@gmail.com',
    password: 'hola',
  };
  
    const changeHandler = (e) => {
      const { name, value } = e.target;
      setLoginDetails((prevLogin) => ({
        ...prevLogin,
        [name]: value,
      }));
    };

  const validateInputValues = (values) => {
      if (values.email !== preestablishedValues.username || values.password !== preestablishedValues.password) {
          return Promise.reject('Invalid username or password');
      }
      return Promise.resolve();
  };

  const onFinish = (values) => {
    validateInputValues(values)
        .then(() => {
            console.log('Form submitted successfully:', values);
            setError(null);
        })
        .catch((error) => {
            console.error('Form submission failed:', error);
            setError(error);
        });
  };
    
    const isDisabled = Object.values(login).some(value => value === "");

  return (
      <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "95vh",
          paddingLeft:'25%'}}> 

        <Form 
          validateTrigger="onSubmit" 
          style={{
            display: 'flex', 
            flexDirection:'column', 
            justifyContent:'space-between', 
            gap:'12px',
            maxWidth: 450,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Text className="title">Sign in</Text>
          <Text className="subtitle">Enter your email and password to sign in!</Text>
          <Button type="primary" size="large">Google</Button>
          <Divider style={{
            margin: '4px'
          }}>Or</Divider>
          <Text className="text">Email*</Text>
          <StyledFormItem
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail',
              },
            ]}
            validateStatus={error && 'error'} 
          >
             <Input size="large" id="email" name="email" placeholder="Enter your email" value={login.email} onChange={changeHandler}/>
          </StyledFormItem>
         
          <Text className="text">Password*</Text>
          <StyledFormItem
            name="password"
            validateStatus={error && 'error'} 
            help={error} 
          >
            <Input.Password size="large" id="password" name="password" placeholder="Enter your password" value={login.password} onChange={changeHandler}/>
          </StyledFormItem>

          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Checkbox><Text className="text">Keep me logged in?</Text></Checkbox>
            <StyledLink to="/recover">Forgot password</StyledLink>
          </div>

          <StyledFormItem>
            <Button type="primary" size="large" htmlType="submit" disabled={isDisabled}>Sign in</Button>
          </StyledFormItem>
          <div style={{display: 'flex', alignItems: 'center' }}>
          <Text className="text" style={{marginRight:'5px'}}>Not registered yet?</Text>
          <StyledLink to="/signup">
            Create an account
          </StyledLink>
        </div>
        </Form>

        </div> 
  );
};

export default Login;
