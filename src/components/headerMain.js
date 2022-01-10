import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import UserImage from './userimage'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const userImageStyles = {
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '75px',
    width: '75px',
    radius: '50px',
    border: '5px solid rgba(0, 0, 0, 0.5)',
    borderRadius: '50px',
    marginRight: '5px',
    overflow: 'hidden',
    backgroundImage: `url(require("../../public/img/man.png"))`
  },
};


export const HeaderMain = () => {
  const navigate = useNavigate();

  const handleLoginClick=() => {
      navigate('/login')
  };
  const handleLogoClick=() => {
      navigate('/')
  };

    return (
      <header className="headerMain" >
      <div></div>
          <img className="orion orion1" overflow="visible" height="100px" width="500px" src="./img/1.svg" alt="orion" onClick={handleLogoClick}/>
          <div><button className="login_button" onClick={handleLoginClick}>Zaloguj</button></div>
      </header>
    )
};


export default HeaderMain
