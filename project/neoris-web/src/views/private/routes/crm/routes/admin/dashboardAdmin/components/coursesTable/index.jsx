import React from "react";
import { StyledDiv, StyledTitle, StyledTable, StyledText } from "./elements";
import { Button } from "antd";
import { ArrowRightOutlined, CheckCircleTwoTone } from "@ant-design/icons";

const CoursesTable = () => {
  const columns = [
    {
      title: <StyledText>Course Name</StyledText>,
      align: "left",
      key: "name",

      render: (row) => {
        return <StyledTitle>{row?.name}</StyledTitle>;
      },
    },
    {
      title: <StyledText>Views</StyledText>,
      key: "views",

      render: (row) => <StyledTitle>{row?.views}</StyledTitle>,
    },
    {
      title: <StyledText>Started</StyledText>,
      align: "left",
      key: "started",

      render: (row) => <StyledTitle>{row?.started}</StyledTitle>,
    },
    {
      title: <StyledText>Completed</StyledText>,
      align: "left",
      key: "completed",

      render: (row) => (
        <StyledTitle style={{ color: "#87d068" }}>
          {" "}
          <CheckCircleTwoTone twoToneColor="#87d068" /> {row?.completed}
        </StyledTitle>
      ),
    },
    {
      title: <StyledText>Bounce Rate</StyledText>,
      align: "right",
      key: "abandoned",

      render: (row) => (
        <StyledTitle style={{ color: "#90D7E7" }}>
          {row?.abandoned} %
        </StyledTitle>
      ),
    },
  ];

  const fakeData = [
    {
      id: 1,
      name: "Curso 1",
      views: 100,
      started: 50,
      completed: 20,
      abandoned: 30,
    },
    {
      id: 2,
      name: "Curso 2",
      views: 200,
      started: 100,
      completed: 50,
      abandoned: 50,
    },
    {
      id: 3,
      name: "Curso 3",
      views: 300,
      started: 150,
      completed: 75,

      abandoned: 75,
    },
    {
      id: 4,
      name: "Curso 4",
      views: 400,
      started: 200,
      completed: 100,
      abandoned: 100,
    },
    // Agrega más datos falsos aquí si lo deseas
  ];

  return (
    <StyledDiv>
      <StyledTable
        locale="es"
        title={() => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <StyledTitle style={{ fontSize: "20px", marginBottom: "30px" }}>
              Most Visited Courses
            </StyledTitle>
          </div>
        )}
        style={{
          width: "100%",
        }}
        dataSource={fakeData.slice(0, 4)} // Usa los datos falsos
        columns={columns}
        rowKey="id"
        scroll="hidden"
        size="small"
        pagination={false}
        className="custom-table" // Añade una clase personalizada
      />
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Button icon={<ArrowRightOutlined />} style={{ border: "none" }}>
          View All
        </Button>
      </div>
    </StyledDiv>
  );
};

export default CoursesTable;
