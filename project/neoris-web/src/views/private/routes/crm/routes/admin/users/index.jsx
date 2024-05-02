import React, { useState } from "react";
import { Button, Row, Typography, Tooltip, Modal, message, Image } from "antd";
import TableTitle from "./table-title";
import UserDrawer from "./userDrawer";
import UserModal from "./userModal";
import {
  TableContainer,
  StyledTitle,
  StyledTag,
  StyledTable,
} from "./elements";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useQuery } from "react-query";

const { Text } = Typography;

const Users = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const deleteUsers = async (id) => {
    await fetch(`http://localhost:5000/eliminar-usuario/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result === false) {
          throw new Error("Error deleting user");
        }
        message.success("Usuario eliminado correctamente");
      })
      .catch(() => {
        message.error("Ha ocurrido un error al eliminar el usuario");
      });
  };

  const fetchUsers = async () => {
    const response = await fetch(`http://localhost:5000/listar-usuarios`);
    if (!response.ok) {
      throw new Error("Ha ocurrido un error al obtener los usuarios");
    }
    return response.json();
  };

  const { data, refetch } = useQuery("users", fetchUsers);

  const [pageConfig, setPageConfig] = useState({
    pageSize: 10,
    page: 1,
  });

  // Table Columns
  const columns = [
    {
      align: "left",
      key: "image",
      render: (row) => {
        return (
          <Image
            preview={false}
            src={row?.foto_de_perfil}
            style={{
              borderRadius: "50%",
              width: "4vw",
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            alt={"imagen"}
          />
        );
      },
    },
    {
      title: () => <StyledTitle>Name</StyledTitle>,
      align: "left",
      key: "user",
      render: (row) => (
        <StyledTag bordered={false}>{row?.nombre_usuario}</StyledTag>
      ),
    },
    {
      title: () => <StyledTitle>Department</StyledTitle>,
      align: "center",
      key: "department",
      render: (row) => (
        <StyledTag bordered={false}>{row?.departamento}</StyledTag>
      ),
    },
    {
      title: () => <StyledTitle>Job Position</StyledTitle>,
      align: "center",
      key: "position",
      render: (row) => <StyledTag bordered={false}>{row?.puesto}</StyledTag>,
    },
    {
      title: () => <StyledTitle>Location</StyledTitle>,
      align: "center",
      key: "location",
      render: (row) => <StyledTag bordered={false}>{row?.ubicacion}</StyledTag>,
    },
    {
      title: () => (
        <StyledTitle level={4} strong>
          ACTIONS
        </StyledTitle>
      ),
      align: "right",
      key: "action",
      width: 180,
      render: (row, record) => (
        <Row
          justify="end"
          style={{
            marginLeft: -13,
          }}
        >
          <Tooltip placement="top" title="Editar">
            <Button
              id="edit-button"
              shape="circle"
              size="large"
              type="primary"
              style={{ margin: 5 }}
              icon={<EditOutlined style={{ color: "white" }} />}
              onClick={() => {
                setIsModalOpen(true);
                setSelectedUser(row);
              }}
            />
          </Tooltip>
          <Tooltip placement="top" title="Eliminar">
            <Button
              shape="circle"
              size="large"
              type="primary"
              danger
              style={{ margin: 5 }}
              icon={<DeleteOutlined />}
              onClick={() => {
                Modal.confirm({
                  maskClosable: true,
                  title: (
                    <>
                      Está eliminando el usuario{" "}
                      <Text mark>{row?.nombre_usuario}</Text>
                    </>
                  ),
                  content:
                    "Una vez eliminado ya no podrá ser utilizado dentro de la plataforma",
                  okText: "Eliminar",
                  onOk: async () => {
                    await deleteUsers(row?.id_usuario);
                    await refetch();
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
    <>
      <TableContainer>
        <StyledTable
          className="custom-table no-scroll"
          locale="es"
          title={() => <TableTitle setDrawerVisible={setDrawerVisible} />}
          dataSource={data || []}
          columns={columns}
          rowKey="id"
          scroll={{ x: false }}
          size="small"
          pagination={{
            current: Number(pageConfig.page),
            defaultCurrent: pageConfig.page,
            pageSize: Number(pageConfig.pageSize),
            defaultPageSize: pageConfig.pageSize,
            total: data?.length || 0,
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
      <UserModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedUser={selectedUser}
        refetch={refetch}
      />
      <UserDrawer
        drawerVisible={drawerVisible}
        setDrawerVisible={setDrawerVisible}
        refetch={refetch}
      />
    </>
  );
};

export default Users;
