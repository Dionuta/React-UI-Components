import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free';
// import moment just like react
import  moment from 'moment';
const HeaderTitle = () => {

    return (
        <div id='title'>
            <h4>Lambda School</h4>              
            <p>@LambdaSchool <strong>·</strong> {moment().format("DD MMM")} </p> 
            
        </div>
    )
}

//export to HeaderContainer.js
export default HeaderTitle;