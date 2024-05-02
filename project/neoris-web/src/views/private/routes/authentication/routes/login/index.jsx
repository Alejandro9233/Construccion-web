import React from "react";
import { Divider, Checkbox, Input, Form, message } from "antd";
import { Button, Text, StyledLink, StyledFormItem } from "../elements";
import { getBackendUrl } from "../../../../../../utils/config";

const Login = ({ setUser }) => {
  const [form] = Form.useForm();

  const validateUser = async (values) => {
    await fetch(`${getBackendUrl()}/verificar-usuario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data[0].validacion === false) {
          throw new Error("Usuario incorrecto");
        }
        setUser(data[0]);
      })
      .catch(() => {
        message.error(
          "Ha ocurrido un error, por favor verifica tus datos e intenta"
        );
      });
  };

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      await validateUser(values);
    } catch (error) {
      message.error("Por favor, completa los campos requeridos");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "95vh",
        paddingLeft: "25%",
      }}
    >
      <Form
        form={form}
        validateTrigger="onSubmit"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "12px",
          maxWidth: 450,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Text className="title">Sign in</Text>
        <Text className="subtitle">
          Enter your email and password to sign in!
        </Text>
        <Divider
          style={{
            margin: "4px",
          }}
        ></Divider>
        <Text className="text">Email*</Text>
        <StyledFormItem
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor introduce tu correo electrónico",
            },
          ]}
        >
          <Input
            size="large"
            id="email"
            name="email"
            placeholder="Introduce tu correo electrónico"
          />
        </StyledFormItem>

        <Text className="text">Password*</Text>
        <StyledFormItem
          name="password"
          rules={[
            {
              required: true,
              message: "Por favor introduce tu contraseña",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            size="large"
            id="password"
            name="password"
            placeholder="Introduce tu contraseña"
          />
        </StyledFormItem>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Checkbox>
            <Text className="text">Keep me logged in?</Text>
          </Checkbox>
          <StyledLink to="/recover">Forgot password</StyledLink>
        </div>

        <StyledFormItem>
          <Button type="primary" size="large" htmlType="submit">
            Sign in
          </Button>
        </StyledFormItem>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Text className="text" style={{ marginRight: "5px" }}>
            Not registered yet?
          </Text>
          <Text className="text" style={{fontWeight:'700'}}>Talk with your administrator</Text>
        </div>
      </Form>
    </div>
  );
};

export default Login;
