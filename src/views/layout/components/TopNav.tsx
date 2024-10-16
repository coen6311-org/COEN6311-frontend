import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileNav from './SideNav'; // Import the MobileNav component
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import MessageIcon from '@mui/icons-material/Message';

export default function TopNav() {
  const [navOpen, setNavOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleAvatorOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatorClose = () => {
    setAnchorEl(null);
  };

  const handleUserProfile = () => {
    navigate('/user-profile');
    handleAvatorClose();
  };

  return (
    <React.Fragment>
      {/* container */}
      <Box
        component="header"
        sx={{
          borderBottom: '1px solid var(--border-color)',
          bgcolor: 'var(--topnav-background)',
          position: 'sticky',
          top: 0,
          zIndex: 'var(--TopNav-zIndex)',
        }}
      >
        {/* side-nav button */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: 'var(--TopNav-height)',
            px: 2,
          }}
        >
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
            <IconButton
              onClick={() => setNavOpen(true)}
              sx={{ display: { lg: 'none' }, width: '40', height: '40' }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>

          {/* Avator and Message */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Tooltip title="Messages">
              <IconButton
                sx={{
                  width: 40, // match Avatar size
                  height: 40, // match Avatar size
                  border: '1px solid', // border style
                  borderColor: 'var(--SideNav-background)', // border color
                }}
              >
                <MessageIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Account">
              <IconButton
                onClick={handleAvatorOpen}
                sx={{
                  width: 40, // match Avatar size
                  height: 40, // match Avatar size
                }}
              >
                <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={!!anchorEl}
              onClose={handleAvatorClose}
            >
              <MenuItem onClick={handleUserProfile}>User Profile</MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Box>

      {/* Include the MobileNav component and manage its state */}
      <MobileNav open={navOpen} onClose={() => setNavOpen(false)} />
    </React.Fragment>
  );
}