import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  padding-bottom: 0px;
  padding-left: 30px;
`;

const Container = styled.div`
  border-radius: 30px;
  background: #fff;
  box-shadow: 14px 17px 40px 4px rgba(112, 144, 176, 0.08);
  width: 38%;
  height: 51px;
  flex-shrink: 0;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 5px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 3vw;
  aspect-ratio: 1/1;
  object-fit: cover;
  
`;

const Index = styled.div`
  color: #707eae;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
`;

const FlowBlock = styled.div`
  background: linear-gradient(to top right, black 55%, gray);
  height: 8px;
  margin-top: 10px;
  width: 30%;
`;

export { Nav, Container, ProfilePicture, Index, FlowBlock };
