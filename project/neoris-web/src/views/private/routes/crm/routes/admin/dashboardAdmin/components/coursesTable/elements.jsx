import styled from "styled-components";
import { Typography, Table } from "antd";

const { Text } = Typography;

const StyledDiv = styled.div`
  border-radius: 30px;
  background: #fff;
  box-shadow: 14px 17px 40px 4px rgba(112, 144, 176, 0.08);
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledTitle = styled(Text)`
  color: #010202;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; // 160%
  letter-spacing: -0.4px;
  width: 100%;
`;

const StyledText = styled(Text)`
  color: #a3aed0;
  font-family: "DM Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; // 171.429%
  letter-spacing: -0.28px;
`;

const StyledTable = styled(Table)`
  &.custom-table {
    .ant-table-cell {
      border-bottom: none;
    }

    .ant-table-row {
      border: none;
    }

    .ant-table-thead .ant-table-cell {
      background-color: white;
    }
  }
`;

export { StyledDiv, StyledTitle, StyledText, StyledTable };
