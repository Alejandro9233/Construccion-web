import React, { useState, useEffect } from "react";
import { StyledDiv, StyledTitle, StyledText } from "./elements";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Row, Statistic } from "antd";
import ReactApexChart from "react-apexcharts";
import { getBackendUrl } from "../../../../../../../../../utils/config";

const GameTrafficChart = ({ user }) => {
  // Use state para guardar las el tráfico dentro del juego por fecha
  // Datos de respuesta: log_date, cantidad_visitas
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${getBackendUrl()}/conexiones-por-fecha`)
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
  let dates = data ? data.map((item) => item.log_date) : [];
  let visits = data ? data.map((item) => item.cantidad_visitas) : [];

  // función para quitarle la hora a las fechas
  function formatDate(dates) {
    let formattedDates = [];
    dates.forEach((date) => {
      formattedDates.push(date.split("T").shift());
    });
    return formattedDates;
  }

  // Conseguir una suma total de los visitantes de los útlimos 7 días
  function getTotalVisitors(visits) {
    let sum = 0;
    visits.forEach((dailyVisits) => {
      sum = dailyVisits + sum;
    });
    return sum;
  }

  // Calcula el cambio de tráfico entre hoy y ayer
  const calculateChange = () => {
    if (data.length < 2) return 0;
    const today = data[data.length - 1].cantidad_visitas;
    const yesterday = data[data.length - 2].cantidad_visitas;
    return ((today - yesterday) / yesterday) * 100;
  };

  const change = calculateChange();
  const changeColor = change >= 0 ? "#01B574" : "#FF0000";
  const ChangeIcon = change >= 0 ? ArrowUpOutlined : ArrowDownOutlined;

  return (
    <StyledDiv>
      <Row style={{ width: "100%" }} justify={"space-between"} align={"middle"}>
        <StyledText>Daily Traffic</StyledText>
        <Statistic
          title={null}
          value={Math.abs(change)}
          precision={2}
          valueStyle={{
            color: changeColor,
            fontSize: "12px",
          }}
          prefix={<ChangeIcon />}
          suffix="%"
        />
      </Row>
      <Row
        style={{ width: "100%", marginTop: "10px" }}
        justify={"start"}
        align={"middle"}
      >
        <div>
          <StyledTitle>{getTotalVisitors(visits)}</StyledTitle>
          <StyledText style={{ marginLeft: "5px" }}>Visitors</StyledText>
        </div>
      </Row>
      <div style={{ width: "100%", marginTop: "10px" }}>
        <ReactApexChart
          options={{
            chart: {
              type: "bar",
              width: "100%",
              height: "auto",
              background: "transparent",
              toolbar: {
                show: true,
              },
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: "55%",
                borderRadius: 5,
              },
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              show: false,
            },
            grid: {
              show: false,
            },
            fill: {
              type: "gradient",
              gradient: {
                shade: "light",
                type: "vertical",
                shadeIntensity: 0.25,
                gradientToColors: ["#90D7E7"],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 0.28,
                stops: [85, 100],
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
            yaxis: {
              labels: {
                show: false,
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
              name: "Totals Game Visits",
              data: visits,
              color: "#fff",
            },
          ]}
          type="bar"
          height={250}
        />
      </div>
    </StyledDiv>
  );
};

export default GameTrafficChart;
