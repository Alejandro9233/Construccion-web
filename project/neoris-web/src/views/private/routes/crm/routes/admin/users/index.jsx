import React, { useState } from "react";
import {
  Button,
  Row,
  Typography,
  Tooltip,
  Modal,
  message,
} from "antd";
import TableTitle from "./table-title";
import UserDrawer from "./userDrawer";
import UserModal from "./userModal";
import { TableContainer, StyledTitle, StyledTag, StyledTable } from "./elements";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";


const { Text } = Typography;

const Users = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (record) => {
    console.log("record", record); 
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

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
          firstName: "Luis",
          lastName: "Pérez",
        },
        {
          id: 2,
          img: "https://via.placeholder.com/150",
          firstName: "Checo",
          lastName: "Pérez",
        },
        {
          id: 3,
          img: "https://via.placeholder.com/150",
          firstName: "Ana",
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
      title: () => (
        <StyledTitle>USUARIO</StyledTitle>
      ),
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
      title: () => (
        <StyledTitle>NOMBRE</StyledTitle>
      ),
      key: "name",

      render: (row) => (
        <StyledTag bordered={false} >{row?.firstName + " " + row?.lastName}</StyledTag>
      ),
    },
    {
      title: () => (
        <StyledTitle
          level={4}
          strong
        >
          ACCIONES
        </StyledTitle>
      ),
      key: "action",
      width: 180,
      render: (row, record) => (
        <Row style={{
          marginLeft: -13,
        }}>
          <Tooltip placement="top" title="Editar">
            <Button
              id="edit-button"
              shape="circle"
              size="large"
              type="primary"
              style={{ margin: 5 }}
              icon={<EditOutlined style={{ color: "white" }} />}
              onClick={() => {
                handleButtonClick(record);
                showModal();
              }}
            />
          </Tooltip>
          <Tooltip placement="top" title="Eliminar">
            <Button
              shape="circle"
              size="large"
              danger
              style={{ margin: 5, backgroundColor: "white", outline: "red"}}
              icon={<DeleteOutlined style={{ color: "red" }} />}
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
    <>
    <UserModal isModalOpen={isModalOpen} onOk={handleOk} onCancel={handleCancel}/>
    <UserDrawer visible={drawerVisible} onClose={onClose}/>
    <TableContainer>
      <StyledTable
        className="custom-table"
        locale="es"
        title={() => <TableTitle  showDrawer={showDrawer}/>}
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
    </>
  );
};

export default Users;
