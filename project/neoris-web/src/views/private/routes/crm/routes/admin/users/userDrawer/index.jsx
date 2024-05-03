import React, { useState } from "react";
import { Drawer, Form, Input, message, Row, Col } from "antd";
import { StyledFormItem, StyledButton } from "./elements";
import { getBackendUrl } from "../../../../../../../../utils/config";

const UserDrawer = ({ drawerVisible, setDrawerVisible, refetch }) => {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  const createUsers = async (values) => {
    const payload = {
      nombre_usuario: values?.name,
      e_mail: values?.email,
      password: values?.password,
      ubicacion: values?.location,
      departamento: values?.department,
      puesto: values?.jobPosition,
      foto_de_perfil:
        values?.profilePicture ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      es_admin: false,
    };

    await fetch(`${getBackendUrl()}/creacion-usuario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result === false) {
          throw new Error("Error creating user");
        }
        message.success("Usuario creado correctamente");
      })
      .catch(() => {
        message.error("An error occurred while creating the user");
      });
  };

  const onFinish = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();
      await createUsers(values);
      await refetch();
      form.resetFields();
      setDrawerVisible(false);
    } catch (errorInfo) {
      message.error("Por favor, completa los campos requeridos");
    } finally {
      setLoading(false);
    }
  };

  const onClose = () => {
    form.resetFields();
    setDrawerVisible(false);
  };

  return (
    <>
      <Drawer
        onClose={onClose}
        visible={drawerVisible}
        title={
          <span
            style={{
              fontFamily: "DM Sans",
              color: "#1B242A",
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "56px",
              marginLeft: "15px",
            }}
          >
            Create User
          </span>
        }
        size="large"
      >
        <Form
          form={form}
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
          <Col style={{ width: "100%" }}>
            <Row style={{ marginTop: "20px", width: "100%" }}>
              <Col span={12}>
                <StyledFormItem
                  name="name"
                  label={<span className="custom-label">Name</span>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input size="large" placeholder="Enter your name" />
                </StyledFormItem>
              </Col>
              <Col span={12}>
                <StyledFormItem
                  name="location"
                  label={<span className="custom-label">Location</span>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input size="large" placeholder="Enter your location" />
                </StyledFormItem>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px", width: "100%" }}>
              <Col span={12}>
                <StyledFormItem
                  name="department"
                  label={<span className="custom-label">Department</span>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input size="large" placeholder="Enter your department" />
                </StyledFormItem>
              </Col>
              <Col span={12}>
                <StyledFormItem
                  name="jobPosition"
                  label={<span className="custom-label">Job Position</span>}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input size="large" placeholder="Enter your job position" />
                </StyledFormItem>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px", width: "100%" }}>
              <Col span={24}>
                <StyledFormItem
                  name="profilePicture"
                  label={<span className="custom-label">Profile Picture</span>}
                >
                  <Input size="large" placeholder="Enter URL" />
                </StyledFormItem>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px", width: "100%" }}>
              <Col span={24}>
                <StyledFormItem
                  name="email"
                  label={<span className="custom-label">Email</span>}
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail",
                    },
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input size="large" placeholder="Enter your email" />
                </StyledFormItem>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px", width: "100%" }}>
              <StyledFormItem
                name="password"
                label={<span className="custom-label">Password</span>}
                rules={[
                  {
                    validator(rule, value) {
                      return new Promise((resolve, reject) => {
                        if (/^(?=.*[A-Z])(?=.*[\W_])(?=.{7,})/.test(value)) {
                          resolve();
                        } else {
                          reject(
                            "Password must be a minimum of 7 characters, have at least one uppercase letter and one special character"
                          );
                        }
                      });
                    },
                  },
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Enter your password"
                />
              </StyledFormItem>
            </Row>
          </Col>
          <StyledFormItem>
            <StyledButton
              type="primary"
              size="large"
              form={form}
              onClick={onFinish}
              loading={loading}
            >
              Create Account
            </StyledButton>
          </StyledFormItem>
        </Form>
      </Drawer>
    </>
  );
};

export default UserDrawer;
