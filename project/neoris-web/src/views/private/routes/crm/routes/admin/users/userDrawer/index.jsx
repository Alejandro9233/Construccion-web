import React from 'react'
import { Drawer, Form, Input, Button } from 'antd'
import { useState } from 'react'
import { Text, StyledFormItem } from './elements'


const UserDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
    <Drawer title="EditCreateUser" onClose={onClose} open={open} style={{width:'400px'}}>
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
          {/* <Text>Name*</Text> */}
          <StyledFormItem
            name="name"
            label="Name"
            >
            <Input size="large" placeholder="Enter your name"/>
          </StyledFormItem>
          {/* <Text>Email*</Text> */}
          <StyledFormItem
            name="email"
            label="Email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail',
              },
            ]}
            >
          <Input size="large" placeholder="Enter your email" /> 
          </StyledFormItem>
          {/* <Text>Location*</Text> */}
          <StyledFormItem
            name="location"
            label="Location"
            >
            <Input size="large" placeholder="Enter your location" />
          </StyledFormItem>
          {/* <Text>Department*</Text> */}
          <StyledFormItem
            name="department"
            label="Department"
            >
            <Input size="large" placeholder="Enter your department" />
          </StyledFormItem>
          {/* <Text>Job Position*</Text> */}
          <StyledFormItem
            name="jobPosition"
            label="Job Position"
            >
            <Input size="large" placeholder="Enter your job position" />
          </StyledFormItem>
          {/* <Text>Password*</Text> */}
          <StyledFormItem
            name="password"
            label="Password"
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
            <Input.Password size="large" placeholder="Enter your password" />
          </StyledFormItem>
          <StyledFormItem>
            <Button type="primary" size="large" htmlType="submit">Create Account</Button>
          </StyledFormItem>
         </Form>
    </Drawer>
    </>
  )
}

export default UserDrawer