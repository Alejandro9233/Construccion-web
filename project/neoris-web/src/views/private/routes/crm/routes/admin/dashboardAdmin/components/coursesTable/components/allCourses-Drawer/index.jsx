import React from "react";
import { StyledTitle, StyledTable, StyledText } from "./elements";
import { Drawer, Image } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

const AllCoursesDrawer = ({ visible, setVisible, data }) => {
  const onClose = () => {
    setVisible(false);
  };

  const columns = [
    {
      align: "center",
      key: "image",
      render: (row) => (
        <Image
          preview={false}
          src={row?.imagen}
          alt=""
          style={{
            borderRadius: "30%",
            width: "4vw",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
        />
      ),
    },
    {
      title: <StyledText>Course Name</StyledText>,
      align: "left",
      key: "curso",

      render: (row) => {
        return <StyledTitle>{row?.curso}</StyledTitle>;
      },
    },
    {
      title: <StyledText>Enrolled Users</StyledText>,
      align: "center",
      key: "enrolled users",

      render: (row) => <StyledTitle>{row?.usuarios_inscritos}</StyledTitle>,
    },
    {
      title: <StyledText>Average Progress</StyledText>,
      align: "center",
      key: "average progress",

      render: (row) => (
        <StyledTitle>{row?.porcentaje_progreso_promedio + "%"}</StyledTitle>
      ),
    },
    {
      title: <StyledText>Completed</StyledText>,
      align: "right",
      key: "completed",

      render: (row) => (
        <StyledTitle style={{ color: "#87d068" }}>
          {" "}
          <CheckCircleTwoTone twoToneColor="#87d068" />{" "}
          {row?.cursos_completados}
        </StyledTitle>
      ),
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
            All Courses
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
export default AllCoursesDrawer;
