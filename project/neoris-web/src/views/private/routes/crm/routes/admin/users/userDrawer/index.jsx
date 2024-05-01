import React from 'react'
import { Drawer, Form, Input } from 'antd'
import { StyledFormItem, StyledButton } from './elements'

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <StyledButton type="primary" size='large' htmlType="submit" disabled={!submittable}>
      {children}
    </StyledButton>
  );
};

const UserDrawer = ({ visible, onClose }) => {
  const [form] = Form.useForm();

  return (
    <>
    <Drawer 
      onClose={onClose}
      visible={visible} 
      title={<span style={{
      fontFamily: 'DM Sans',
      color: '#1B242A',
      fontSize: '36px',
      fontWeight: '700',
      lineHeight: '56px', 
      marginLeft: '15px'
    }}>Create User</span>} size='large'>
      <Form
          form={form} 
          name='validateOnly'
          layout='vertical'
          autoComplete="off"
          style={{
            display: 'flex', 
            flexDirection:'column', 
            justifyContent:'space-between', 
            gap:'15px',
            width: '100%'
         }}>
      
          <StyledFormItem 
            style={{ marginTop: '-10px' }}
            name="name"
            label={<span className="custom-label">Name</span>}
            rules={[
              {
                required: true,
              }
            ]}
            >
            <Input size="large" placeholder="Enter your name"/>
          </StyledFormItem>
      
          <StyledFormItem
            name="email"
            label={<span className="custom-label">Email</span>}
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail',
              },
              {
                required: true,
              }
            ]}
            >
          <Input size="large" placeholder="Enter your email" /> 
          </StyledFormItem>
       
          <StyledFormItem
            name="location"
            label={<span className="custom-label">Location</span>}
            rules={[{
              required: true
            }]}
            >
            <Input size="large" placeholder="Enter your location" />
          </StyledFormItem>
       
          <StyledFormItem
            name="department"
            label={<span className="custom-label">Department</span>}
            rules={[{
              required: true
            }]
            }
            >
            <Input size="large" placeholder="Enter your department" />
          </StyledFormItem>
        
          <StyledFormItem
            name="jobPosition"
            label={<span className="custom-label">Job Position</span>}
            rules={[{
              required: true
            }]
            }
            >
            <Input size="large" placeholder="Enter your job position" />
          </StyledFormItem>
        
          <StyledFormItem
            name="password"
            label={<span className="custom-label">Password</span>}
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
              },
              {
                required: true,
              }
            ]}
            >
            <Input.Password size="large" placeholder="Enter your password" />
          </StyledFormItem>
          <StyledFormItem>
            <SubmitButton type="primary" size="large" form={form}>Create Account</SubmitButton>
          </StyledFormItem>
         </Form>
    </Drawer>
    </>
  )
}

export default UserDrawer