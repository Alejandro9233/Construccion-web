import React, { useState, useEffect } from "react";
import { StyledDiv, StyledTitle, StyledText } from "./elements";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Row, Statistic } from "antd";
import ReactApexChart from "react-apexcharts";

const generateFakeData = () => {
  let data = [];
  for (let i = 0; i < 7; i++) {
    data.push(Math.floor(Math.random() * 100));
  }
  return data;
};

const GameTrafficChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(generateFakeData());
  }, []);

  const calculateChange = () => {
    if (data.length < 2) return 0;
    const today = data[data.length - 1];
    const yesterday = data[data.length - 2];
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
          <StyledTitle>1,200</StyledTitle>
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
              categories: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
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
              name: "Total Visitas Registradas",
              data: generateFakeData(),
              color: "#fff",
            },
          ]}
          type="bar"
          height={220}
        />
      </div>
    </StyledDiv>
  );
};

export default GameTrafficChart;
