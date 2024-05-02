import React, { useState, useEffect } from "react";
import { StyledFormItem } from "./elements";
import { Form, Input, Modal, message } from "antd";
import { getBackendUrl } from "../../../../../../../../utils/config";

const UserModal = ({ isModalOpen, setIsModalOpen, selectedUser, refetch }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedUser) {
      form.setFieldsValue({
        Name: selectedUser?.nombre_usuario,
        Email: selectedUser?.e_mail,
        Location: selectedUser?.ubicacion,
        Department: selectedUser?.departamento,
        JobPosition: selectedUser?.puesto,
        profilePicture: selectedUser?.foto_de_perfil,
      });
    }
  }, [selectedUser, form]);

  const updateUser = async (values) => {
    const payload = {
      id_usuario: selectedUser?.id_usuario,
      nombre_usuario: values?.Name || selectedUser?.nombre_usuario,
      e_mail: values?.Email || selectedUser?.e_mail,
      ubicacion: values?.Location || selectedUser?.ubicacion,
      departamento: values?.Department || selectedUser?.departamento,
      puesto: values?.JobPosition || selectedUser?.puesto,
      foto_de_perfil: values?.profilePicture || selectedUser?.foto_de_perfil,
    };

    await fetch(`${getBackendUrl()}/modificar-usuarios`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result === false) {
          throw new Error("Error updating user");
        }
        message.success("Usuario actualizado correctamente");
      })
      .catch(() => {
        message.error("Ha ocurrido un error al actualizar el usuario");
      });
  };

  const onCancel = () => {
    setIsModalOpen(false);
  };

  const onOk = async () => {
    setLoading(true);
    try {
      const values = form.getFieldsValue();
      await updateUser(values);
      await refetch();
      setIsModalOpen(false);
    } catch (error) {
      message.error("Ha ocurrido un error al actualizar el usuario");
    } finally {
      setIsModalOpen(false);
      setLoading(false);
    }
  };

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
        confirmLoading={loading}
        style={{ top: 20 }}
        okText="Guardar"
        cancelText="Cancelar"
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
            name="JobPosition"
            label={<span className="custom-label">Job Position</span>}
          >
            <Input placeholder="Enter your job position" />
          </StyledFormItem>

          <StyledFormItem
            name="profilePicture"
            label={<span className="custom-label">Profile Picture</span>}
          >
            <Input size="large" placeholder="Enter URL" />
          </StyledFormItem>
        </Form>
      </Modal>
    </>
  );
};

export default UserModal;
