import React from 'react';
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-3'>
            <img src={logo} alt="" className='mt-10'/>
            <p>Journalism Without Fear or Favour</p>
            <button className='btn btn-primary'>click me</button>
        </div>
    );
};

export default Header;