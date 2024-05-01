import React from "react";
import { StyledTitle, StyledTable, StyledText } from "./elements";
import { Drawer, Image } from "antd";
import { AlertTwoTone } from "@ant-design/icons";
import moment from "moment";

const AllUsersDrawer = ({ visible, setVisible, data }) => {
  const onClose = () => {
    setVisible(false);
  };

  const getStatus = (lastConnection) => {
    const daysAgo = moment().diff(moment(lastConnection), "days");

    if (daysAgo < 2) {
      return { status: "Active", color: "#87d068" };
    } else if (daysAgo < 3) {
      return { status: "Low Active", color: "#FFC000" };
    } else {
      return { status: "Inactive", color: "red" };
    }
  };

  const columns = [
    {
      align: "center",
      key: "image",
      render: (row) => (
        <Image
          preview={false}
          src={row?.foto_de_perfil}
          alt=""
          style={{
            borderRadius: "50%",
            width: "4vw",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
        />
      ),
    },
    {
      title: <StyledText>Name</StyledText>,
      align: "left",
      key: "nombre_usuario",
      render: (row) => {
        return <StyledTitle>{row?.nombre_usuario}</StyledTitle>;
      },
    },
    {
      title: <StyledText>Job Position</StyledText>,
      align: "left",
      key: "puesto",
      render: (row) => <StyledTitle>{row?.puesto}</StyledTitle>,
    },
    {
      title: <StyledText>Last Connection</StyledText>,
      align: "left",
      key: "ultima_conexion",
      render: (row) => (
        <StyledTitle>{moment(row?.ultima_conexion).fromNow()}</StyledTitle>
      ),
    },
    {
      title: <StyledText>Status</StyledText>,
      align: "right",
      key: "status",
      render: (row) => {
        const { status, color } = getStatus(row?.ultima_conexion);
        return (
          <StyledTitle style={{ color }}>
            <AlertTwoTone twoToneColor={color} style={{ fontSize: "20px" }} />{" "}
            {status}
          </StyledTitle>
        );
      },
    },
  ];

  return (
    <Drawer
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <StyledTitle style={{ fontSize: "20px", marginBottom: "30px" }}>
            All Team Members
          </StyledTitle>
        </div>
      }
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
      width={800}
    >
      <StyledTable
        columns={columns}
        dataSource={data}
        rowKey="id"
        scroll="auto"
        size="small"
        pagination={false}
        className="custom-table"
      />
    </Drawer>
  );
};
export default AllUsersDrawer;
