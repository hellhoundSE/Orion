import {UserImage} from './components/userimage';
import Header from './components/header'
import {  useNavigate } from 'react-router-dom';
import './css/main.css';
import * as React from 'react';
//import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import StepProgressBar from './components/stepProgressBar'
//import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from 'react-bootstrap/Button';
import {DropdownButton, Dropdown} from 'react-bootstrap'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import PixIcon from '@mui/icons-material/Pix';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const WprowadzenieHTML = () => {
  const navigate = useNavigate();

  const handleClickWprowadzenieHTML=() => {
      navigate('/login')
  };

  const [open, setOpen] = React.useState(true);


  const handleClick = () => {
    setOpen((prevState) => (!prevState))
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
      <div className="progressBar">
        <StepProgressBar progressPercent="25"></StepProgressBar>
      </div>
      <div className="navProgressBar">
        <ArrowBackIcon></ArrowBackIcon>
        <ArrowForwardIcon></ArrowForwardIcon>

      </div>
      <div className="containerContent">

        <div className="introduction">
          <div className="progressPanel">
            <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"

    >
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <PixIcon />
      </ListItemIcon>
      <ListItemText primary="Wstęp" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Czego się nauczysz?" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Potrzebne programy" />
        </ListItemButton>
      </List>
    </Collapse>
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <PixIcon />
      </ListItemIcon>
      <ListItemText primary="Krok 1" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Wstęp do HTML" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Język HTML" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Potrzebne programy" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <TextSnippetIcon />
          </ListItemIcon>
          <ListItemText primary="Quiz 1" />
        </ListItemButton>
      </List>
    </Collapse>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PixIcon />
        </ListItemIcon>
        <ListItemText primary="Krok 2" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Wstęp do HTML" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Język HTML" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary="Potrzebne programy" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <TextSnippetIcon />
          </ListItemIcon>
          <ListItemText primary="Quiz 1" />
        </ListItemButton>
        </List>
      </Collapse>
    </List>


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
