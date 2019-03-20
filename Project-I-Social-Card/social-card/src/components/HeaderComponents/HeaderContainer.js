import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';



const  HeaderContainer =() => {
    return (
        <header>
          <ImageThumbnail />
          <HeaderContent/>
        </header>
    )
}

export default HeaderContainer;