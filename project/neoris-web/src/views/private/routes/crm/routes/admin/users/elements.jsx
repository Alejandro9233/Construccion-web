import styled from "styled-components";
import { Typography, Tag as AntTag, Table } from "antd";

const { Text } = Typography;

const StyledTitle = styled(Text)`
  color: #A3AED0;;
  font-size: 16px;
  font-style: normal;

  line-height: 32px; // 160%
  letter-spacing: -0.4px;
  width: 100%;
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


const StyledTag = styled(AntTag)`
  color: #080B0D;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.28px;
  background-color: transparent;
  margin-left: -10px;
  padding: 0px;
`;


const TableContainer = styled.div`
  padding: 20px;
  overflow-y: scroll;
  .ant-table-content {
    overflow-x: scroll;
  }
  .ant-table-thead .ant-table-cell {
    background-color: white;
    color: #8c8c8c;
    font-weight: 600;
  }
`;

const RowInfo = styled.div`
  h5 {
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 3px;
  }
  a {
    font-size: 14px;
    font-weight: 400;
    color: #8c8c8c;
    margin: 0px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #8c8c8c;
    margin: 0px;
  }
`;



export { TableContainer, RowInfo, StyledTitle, StyledTag, StyledTable};
