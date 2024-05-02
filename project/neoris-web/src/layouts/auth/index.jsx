import React from 'react';
import logo from './logo.png';
import neoris from './neoris.png';
import PropTypes from "prop-types";
import { Image } from 'antd';
import { Container, Text } from './elements';

function AuthLayout({ children }) {
  return (
   <div style={{
    display:'flex', 
    flexDirection:'row',
    width:'100%',
    minHeight:'100vh'}}>
    <div style={{
      position:'absolute',
      height:'100%',
      width:'50%',
    }}>
      {children}
    </div>
    <div style={{
      marginLeft:'305px',
    }}>
    <Container>
        <div style={{display: 'flex', flexDirection: "column",  alignItems:'center', height:'100%', justifyContent:'space-between'}}>
        <div style={{marginTop: '100px'}}>
          <Image
              width={400} // Adjust the width value to make the logo smaller
              height={null} // Remove the height value to keep it proportional
              src={logo}
              preview={false}
              style={{ 
                  margin: '0 auto', 
                  overflow: 'hidden'}}
          /> 
        </div>
        <Image
            width={350}
            height={70}
            src={neoris}
            preview={false}
            style={{ 
                margin: '0 auto', 
                marginTop: '-20px'}}
        /> 
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
          <Text className='footerRight'>License</Text>
          <Text className='footerRight'>Terms of Use</Text>
          <Text className='footerRight'>Blog</Text>
        </div>
        </div>
    </Container>
    </div>
    <footer style={{position:'absolute', bottom:'0',left:'0' ,paddingBottom:'10px', paddingLeft:'305px'}}><Text className="footerLeft">© 2024 NEORIS UI. All Rights Reserved. Made with love by ITESM!</Text></footer>
   </div>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout