import React from 'react';
import './Header.css';
import Logo from '../../images/UPS_Logo.png';
// import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <div className="row" id="banner">
            <div className="col-1">
                    {/* <Link to='/'> */}
                    <img src={Logo} alt="Logo" height="35vh" className="logo" onClick={() => window.location = '/'}/>
                    {/* </Link> */}
            </div>
            <span id="dash"></span>
            <div className="col-5 text">
                Systems Programming Windows Development Group
            </div>
        </div>
        </div>
    )
}

export default Header;