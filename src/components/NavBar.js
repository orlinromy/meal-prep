import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Box, IconButton } from '@mui/material'
import icon from '../assets/food-tray.webp'

const NavBar = () => {
  let navigate = useNavigate()
  return (
    <Box className="border-b-2 pt-0 bg-gradient-to-t from-[#fdf8f3] via-white">
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={() => {
          navigate('/')
        }}
        color="inherit"
        disableRipple={true}
      >
        <Box
          component="img"
          alt="prep-a-meal icon"
          className="w-[50px] h-[50px]"
          src={icon}
        />
      </IconButton>
      <NavLink to="/" style={{ padding: '2rem 1rem' }}>
        Home
      </NavLink>
      <NavLink to="/create" style={{ padding: '2rem 1rem' }}>
        Create
      </NavLink>
    </Box>
  )
}

export default NavBar
