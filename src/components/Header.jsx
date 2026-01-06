<<<<<<< Updated upstream
import React from 'react';
import { Link } from "react-router-dom";
=======
import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
>>>>>>> Stashed changes
import Cart from '../components/Cart'


import { AppBar, Divider, IconButton, Toolbar, Button, Typography, Box } from "@mui/material";

const Header = () => {
<<<<<<< Updated upstream
=======

    const { isUserLogged, logout, login } = useAuth();
    const navigate = useNavigate();

    //Para control de login
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('token');
        if (isAuthenticated) {
            login(isAuthenticated)
        }
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/')
    }

>>>>>>> Stashed changes
    return (
        <div>
            <Box
                component="img"
                src="/banner.jpeg"
                alt="Banner"
                sx={{
                    width: "100%",
                    height: 180,
                    objectFit: "cover",
                    display: "block",
                }}
            />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        FULLSTACK SHOES
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link to='/'>
                            <Button
                                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                Home
                            </Button>
                        </Link>
                        <Link to='/aboutus'>
                            <Button
                                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                Sobre Nosotros
                            </Button>
                        </Link>
                        <Link to='/terms'>
                            <Button
                                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                FAQs
                            </Button>
                        </Link>
                        <Link to='/contact'>
                            <Button
                                sx={{ my: 2, marginRight: 3, color: 'white', display: 'block', border: 2 }}>
                                Contacto
                            </Button>
                        </Link>
                        <span style={{ marginTop: 15 }}>
                            <Cart></Cart>
                        </span>
                    </Box>
                    <IconButton color="inherit" aria-label="Admin Access">
                        <Typography variant="body1" sx={{ pr: 1 }}>
                            <Link to='/panel'>
                                Acceso Admin
                            </Link>
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Divider style={{ marginBottom: 20 }}></Divider>
        </div>
    );
};

export default Header;