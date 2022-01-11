import {UserImage} from './components/userimage';
import Header from './components/header'
import {  useNavigate } from 'react-router-dom';
import './css/main.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const WprowadzenieHTML = () => {
  const navigate = useNavigate();

  const handleClickWprowadzenieHTML=() => {
      navigate('/login')
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    return (

      <div className="body">
  {/*  <header className="head head1">
        <div></div>
        <img className="orion orion1" src="img/2.svg" alt="orion"/>
        <div className="userimage">
          <UserImage></UserImage>
        </div>


    </header>*/}
    <Header></Header>
    {/*<p class="sci">{sessionStorage.getItem('user')}</p>*/}

    <div className="containerContent">
      <div className="introduction">
        <div className="progressPanel">
          <p>MENU</p>
          <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="menuElement"
      >
        Lekcje
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
        </div>
        <div className="introductionContent">
          <div className="videoFrame">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MRIMT0xPXFI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </h2>
        </div>
      </div>
    </div>
</div>)
};


export default WprowadzenieHTML
