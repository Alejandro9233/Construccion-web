import React from "react";
import { StyledFormItem } from "./elements";
import { Form, Input, Modal } from "antd";

const UserModal = ({ isModalOpen, onOk, onCancel, userData }) => {
  return (
    <>
      <Modal
        title={
          <span
            style={{
              fontFamily: "DM Sans",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            Editar Usuario
          </span>
        }
        open={isModalOpen}
        onOk={onOk}
        onCancel={onCancel}
        style={{ top: 20 }}
      >
        <Form
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "15px",
            width: "100%",
          }}
        >
          <StyledFormItem
            name="Name"
            label={<span className="custom-label">Name</span>}
          >
            <Input placeholder="Enter your name" />
          </StyledFormItem>

          <StyledFormItem
            name="Email"
            label={<span className="custom-label">Email</span>}
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail",
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </StyledFormItem>

          <StyledFormItem
            name="Location"
            label={<span className="custom-label">Location</span>}
          >
            <Input placeholder="Enter your location" />
          </StyledFormItem>

          <StyledFormItem
            name="Department"
            label={<span className="custom-label">Department</span>}
          >
            <Input placeholder="Enter your department" />
          </StyledFormItem>

          <StyledFormItem
            name="Job Position"
            label={<span className="custom-label">Job Position</span>}
          >
            <Input placeholder="Enter your job position" />
          </StyledFormItem>

          <StyledFormItem
            name="Password"
            label={<span className="custom-label">Password</span>}
            rules={[
              {
                validator(rule, value) {
                  return new Promise((resolve, reject) => {
                    if (/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{7,})/.test(value)) {
                      resolve();
                    } else {
                      reject(
                        "Password must be a minimum of 7 characters, have at least one uppercase letter and one special character"
                      );
                    }
                  });
                },
              },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </StyledFormItem>
        </Form>
      </Modal>
    </>
  );
};

export default UserModal;
