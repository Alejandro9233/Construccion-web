import React from 'react';
import logo from './logo.png';
import neoris from './neoris.png';
import PropTypes from "prop-types";
import { Image } from 'antd';
import { Container, Text } from './elements';

function AuthLayout({ children }) {
  return (
   <div style={{display:'flex', flexDirection:'row',}}>
    {children}
     <Container>
        <div style={{display: 'flex', flexDirection: "column",  alignItems:'center', height:'100%', justifyContent:'space-between'}}>
        <Image
            width={419}
            height={359}
            src={logo}
            preview={false}
            style={{ 
                margin: '0 auto', 
                marginTop: '100px',}}
        /> 
        <Image
            width={350}
            height={70}
            src={neoris}
            preview={false}
            style={{ 
                margin: '0 auto', 
                marginTop: '-50px',}}
        /> 
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text>License</Text>
          <Text>Terms of Use</Text>
          <Text>Blog</Text>
        </div>
        </div>
    </Container>
   </div>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout