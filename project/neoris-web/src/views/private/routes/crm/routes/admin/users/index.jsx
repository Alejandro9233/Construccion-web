import React, { useState } from "react";
import {
  Tag,
  Table,
  Button,
  Row,
  Typography,
  Tooltip,
  Modal,
  message,
} from "antd";
import TableTitle from "./table-title";
import { TableContainer } from "./elements";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Users = () => {
  const [pageConfig, setPageConfig] = useState({
    pageSize: 20,
    page: 1,
  });

  const usersData = {
    users: {
      results: [
        {
          id: 1,
          img: "https://via.placeholder.com/150",
          firstName: "Juan",
          lastName: "Pérez",
        },
        // Agrega más usuarios aquí
      ],
      info: {
        count: 1, // Actualiza este valor para que coincida con el número de usuarios
      },
    },
  };

  // Table Columns
  const columns = [
    {
      title: "USUARIO",
      align: "left",
      key: "user",

      render: (row) => {
        return (
          <img
            src={row?.img}
            style={{ width: 60, height: 60, borderRadius: 50 }}
            alt={"imagen"}
          />
        );
      },
    },
    {
      title: "NOMBRE",
      key: "name",

      render: (row) => (
        <Tag color="blue">{row?.firstName + " " + row?.lastName}</Tag>
      ),
    },
    {
      title: () => (
        <Title
          level={4}
          strong
          style={{ marginTop: "auto", marginBottom: "auto" }}
        >
          Acciones
        </Title>
      ),
      key: "action",
      width: 180,
      render: (row) => (
        <Row>
          <Tooltip placement="top" title="Editar">
            <Button
              shape="circle"
              size="large"
              type="primary"
              style={{ margin: 5 }}
              icon={<EditOutlined style={{ color: "white" }} />}
              onClick={() => {
                message.info("Editar usuario");
              }}
            />
          </Tooltip>
          <Tooltip placement="top" title="Eliminar">
            <Button
              shape="circle"
              size="large"
              type="danger"
              style={{ margin: 5 }}
              icon={<DeleteOutlined style={{ color: "white" }} />}
              onClick={() => {
                Modal.confirm({
                  maskClosable: true,
                  title: (
                    <>
                      Está eliminando el usuario{" "}
                      <Text mark>{row?.firstName + " " + row?.lastName}</Text>
                    </>
                  ),
                  content:
                    "Una vez eliminado ya no podrá ser utilizado dentro de la plataforma",
                  okText: "Eliminar",
                  onOk: async () => {
                    message.success("Usuario eliminado correctamente");
                  },
                  cancelText: "Cancelar",
                  onCancel: () => {},
                });
              }}
            />
          </Tooltip>
        </Row>
      ),
    },
  ];

  return (
    <TableContainer>
      <Table
        locale="es"
        title={() => <TableTitle />}
        dataSource={usersData?.users?.results || []}
        columns={columns}
        rowKey="id"
        scroll={{ y: "63vh" }}
        pagination={{
          current: Number(pageConfig.page),
          defaultCurrent: pageConfig.page,
          pageSize: Number(pageConfig.pageSize),
          defaultPageSize: pageConfig.pageSize,
          total: usersData?.users?.info.count || 0,
          showTotal: (total) => <Text disabled>{`${total} resultados`}</Text>,
          onChange: (page, pageSize) => {
            setPageConfig({
              page,
              pageSize,
            });
          },
        }}
      />
    </TableContainer>
  );
};

export default Users;
