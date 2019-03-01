import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free';
import  moment from 'moment';
const HeaderTitle = () => {

    return (
        <div id='title'>
            <h4>Lambda School</h4>
            <p>@LambdaSchool · {moment().format("DD MMM")} </p>
            
        </div>
    )
}

export default HeaderTitle;