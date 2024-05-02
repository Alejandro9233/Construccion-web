import React, { useEffect, useState } from "react";
import { Image, Row, Col } from "antd";
import backgroundImg from "./ProfileBg.png";
import { StyledDiv, StyledImageDiv, StyledTitle, StyledText } from "./elements";
import { getBackendUrl } from "../../../../../../../../utils/config";

const ProfileCard = ({ user }) => {
  // Use state para guardar los datos del perfil del usuario y use effect para hacer fetch a la api y obtener los datos
  // Contenidos de profileData: {cursos_inscritos, neo_stars, neo_coins}
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${getBackendUrl()}/profile-card/${user?.id_usuario}`)
        .then((res) => res.json())
        .then((data) => {
          setProfileData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, [user]);

  // Obtener los datos del perfil del usuario de la respuesta de la api para usarlos dentro del componente
  const enrolled_courses =
    profileData.length > 0 ? profileData[0].cursos_inscritos : 0;
  const neo_stars = profileData.length > 0 ? profileData[0].neo_stars : 0;
  const neo_coins = profileData.length > 0 ? profileData[0].neo_coins : 0;

  // Función para formatear las neo_coins,
  function formatNumber(number) {
    return Math.abs(Number(number)) >= 1.0e9
      ? (Math.abs(Number(number)) / 1.0e9).toFixed(1) + "B"
      : Math.abs(Number(number)) >= 1.0e6
      ? (Math.abs(Number(number)) / 1.0e6).toFixed(1) + "M"
      : Math.abs(Number(number)) >= 1.0e3
      ? (Math.abs(Number(number)) / 1.0e3).toFixed(1) + "K"
      : Math.abs(Number(number));
  }

  return (
    <StyledDiv>
      <Image preview={false} src={backgroundImg} style={{ zIndex: 1 }} />
      <StyledImageDiv>
        <Image
          style={{
            borderRadius: "50%",
            width: "5vw",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
          preview={false}
          src={
            user?.foto_de_perfil
              ? user.foto_de_perfil
              : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          }
        />
      </StyledImageDiv>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StyledTitle>{user.nombre_usuario}</StyledTitle>
        <StyledText>{user.puesto}</StyledText>
      </div>
      <Row
        gutter={[16, 16]}
        style={{
          width: "100%",
          marginTop: "20px",
        }}
      >
        <Col
          span={8}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StyledTitle>{enrolled_courses}</StyledTitle>
          <StyledText>Courses</StyledText>
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StyledTitle>{formatNumber(neo_coins)}</StyledTitle>
          <StyledText>Neo Coins</StyledText>
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StyledTitle>{neo_stars}</StyledTitle>
          <StyledText>Neo Stars</StyledText>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default ProfileCard;
