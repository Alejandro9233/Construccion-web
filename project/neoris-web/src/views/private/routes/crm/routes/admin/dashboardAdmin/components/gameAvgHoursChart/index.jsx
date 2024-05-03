import React, { useState, useEffect } from "react";
import { StyledDiv, StyledTitle, StyledText } from "./elements";
import { Row, Col } from "antd";
import { TrophyTwoTone } from "@ant-design/icons";
import ReactApexChart from "react-apexcharts";
import { getBackendUrl } from "../../../../../../../../../utils/config";

const GameAvgHoursChart = ({ user }) => {
  // Use state para guardar los minutos promedio dentro del juego por fecha
  // Datos de respuesta: fecha, promedio_minutos_de_juego
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${getBackendUrl()}/minutos-juego-por-fecha`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, [user]);

  // conseguir los arreglos de los ejes verticales y horizontales para las tablas
  let dates = data ? data.map((item) => item.fecha) : [];
  let hours = data ? data.map((item) => item.promedio_minutos_de_juego) : [];

  // función para quitarle la hora a las fechas
  function formatDate(dates) {
    let formattedDates = [];
    dates.forEach((date) => {
      formattedDates.push(date.split("T").shift());
    });
    return formattedDates;
  }

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
              <StyledTitle style={{ fontSize: "16px" }}>Last Week</StyledTitle>
              <StyledText>Unity Game</StyledText>
            </Col>
          </Row>
        </div>
        {/* <Statistic
          title={null}
          value={3.5}
          precision={2}
          valueStyle={{
            color: "#1B2559",
            fontSize: "24px",
          }}
          suffix="hrs"
        /> */}
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
              categories: formatDate(dates),
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
              name: "Average Minutes in Game",
              data: hours,
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
