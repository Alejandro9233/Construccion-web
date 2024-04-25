import React from "react";
import { StyledDiv, StyledTitle, StyledText } from "./elements";
import { Row, Col, Statistic } from "antd";
import { TrophyTwoTone } from "@ant-design/icons";
import ReactApexChart from "react-apexcharts";

// Función para generar un número aleatorio entre min y max
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

// Función para generar los últimos siete días
const getLastSevenDays = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const lastSevenDays = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    lastSevenDays.push(days[d.getDay()]);
  }
  return lastSevenDays;
};

const GameAvgHoursChart = () => {
  // Generar datos falsos para el gráfico
  const fakeData = Array.from({ length: 7 }, () => getRandomInt(1, 10));

  return (
    <StyledDiv>
      <StyledTitle>Average Time Played</StyledTitle>
      <Row
        style={{ width: "100%", marginTop: "10px" }}
        justify={"space-between"}
        align={"middle"}
      >
        <div>
          <Row>
            <TrophyTwoTone style={{ fontSize: "40px" }} />
            <Col
              style={{
                marginLeft: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <StyledTitle style={{ fontSize: "16px" }}>Today</StyledTitle>
              <StyledText>Unity Game</StyledText>
            </Col>
          </Row>
        </div>
        <Statistic
          title={null}
          value={3.5}
          precision={2}
          valueStyle={{
            color: "#1B2559",
            fontSize: "24px",
          }}
          suffix="hrs"
        />
      </Row>
      <div style={{ width: "100%", marginTop: "10px" }}>
        <ReactApexChart
          options={{
            chart: {
              width: "100%",
              height: "auto",
              type: "area",
              toolbar: {
                show: true,
                tools: {
                  download: true, // Habilitar o deshabilitar la opción de descarga
                  selection: false, // Habilitar o deshabilitar la opción de selección
                  zoom: false, // Habilitar o deshabilitar la opción de zoom
                  zoomin: false, // Habilitar o deshabilitar la opción de zoom in
                  zoomout: false, // Habilitar o deshabilitar la opción de zoom out
                  pan: false, // Habilitar o deshabilitar la opción de pan
                  reset: false, // Habilitar o deshabilitar la opción de reset
                },
              },
            },
            legend: {
              show: false,
            },

            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
            },
            grid: {
              show: false,
            },
            yaxis: {
              labels: {
                show: false,
              },
            },

            xaxis: {
              categories: getLastSevenDays(),
              labels: {
                show: true,
                align: "right",
                minWidth: 0,
                maxWidth: 160,
                style: {
                  colors: [
                    "#B0BBD5",
                    "#B0BBD5",
                    "#B0BBD5",
                    "#B0BBD5",
                    "#B0BBD5",
                    "#B0BBD5",
                    "#B0BBD5",
                  ],
                },
              },
            },

            tooltip: {
              y: {
                formatter: function (val) {
                  return val;
                },
              },
            },
          }}
          series={[
            {
              name: "Promdio de Horas Jugadas",
              data: fakeData,
              color: "#90D7E7",
            },
          ]}
          type="area"
          height={220}
        />
      </div>
    </StyledDiv>
  );
};

export default GameAvgHoursChart;
