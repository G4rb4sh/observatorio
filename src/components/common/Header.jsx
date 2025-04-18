// src/components/common/Header.jsx
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import { siteContent } from '../../data/content';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Animation variants
  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (custom) => ({
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.3,
        delay: 0.1 * custom
      }
    })
  };

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo and title for desktop */}
          <motion.div 
            variants={logoVariants}
            initial="initial"
            animate="animate"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <Box component="img" src={siteContent.header.logo || "/placeholder-logo.png"} sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              mr: 1,
              height: 40
            }} alt="MIEM Logo" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
              }}
            >
              {siteContent.header.title}
            </Typography>
          </motion.div>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {siteContent.header.navigation.map((item) => (
                <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{item.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo and title for mobile */}
          <Box component="img" src={siteContent.header.logo || "/placeholder-logo.png"} sx={{ 
            display: { xs: 'flex', md: 'none' }, 
            mr: 1,
            height: 32
          }} alt="MIEM Logo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            {siteContent.header.title}
          </Typography>

          {/* Desktop navigation items */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {siteContent.header.navigation.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    my: 2, 
                    mx: 1,
                    color: 'text.primary', 
                    display: 'block',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent'
                    }
                  }}
                  href={item.url}
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </Box>

          {/* Search button */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton 
              aria-label="search" 
              color="primary"
              sx={{ 
                ml: 1,
                bgcolor: 'rgba(12, 77, 162, 0.08)',
                '&:hover': {
                  bgcolor: 'rgba(12, 77, 162, 0.12)',
                }
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;