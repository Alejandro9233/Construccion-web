import React from 'react';
import logo from './logo.png';
import topImageBar from './topImageBar.png';
import { SearchOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { StyledImage, StyledInput, StyledButton } from './elements';
import { Image, Divider } from 'antd';
import { useState } from 'react';



const Menu = ({favorites}) => {
    const [isFilled, setIsFilled] = useState(false);

    const handleClick = (favorites) => {
      setIsFilled(!isFilled);
      favorites = isFilled;
      console.log(favorites)
      return favorites;
    };

  return (
    <div style={{
        width: 'calc(100% - 4.1rem)',
        height: 'calc(100% - 4.1rem)',
    }}>
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }}> 
        <Image src={topImageBar} preview={false} style={{width: '100%', borderRadius:'20px' }} />
        <StyledImage src={logo}  preview={false} />
        </div>
        <Divider></Divider>
       <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
       
       }}>
        <StyledInput placeholder="Search course" prefix={<SearchOutlined />} size='large'/>
        <StyledButton type="primary" size='large' onClick={() => handleClick(favorites)}>
        {isFilled ? <HeartFilled /> : <HeartOutlined />}
            Favorites</StyledButton>
       </div>
       </div> 
  
  )
}

export default Menu