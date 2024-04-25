import styled from "styled-components";

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

export { TableContainer, RowInfo };
