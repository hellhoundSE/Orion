import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import UserImage from "./userimage";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import NoteIcon from "@mui/icons-material/Note";
import PendingIcon from "@mui/icons-material/Pending";

export const Header = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <header className="head headerAllocation">
        <div></div>
        <img
          className="orion orion1"
          overflow="visible"
          src="img/2.svg"
          alt="orion"
          onClick={handleLogoClick}
        />
        <div className="userimage">
          <UserImage onClick={handleClick} />
        </div>
      </header>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          Profil
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PendingIcon fontSize="small" />
          </ListItemIcon>
          Postępy
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PendingIcon fontSize="small" />
          </ListItemIcon>
          Certyfikaty
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <NoteIcon fontSize="small" />
          </ListItemIcon>
          Notatki
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Wyłoguj
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default Header;
