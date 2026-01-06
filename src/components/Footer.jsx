import React from 'react';
import { Paper} from "@mui/material";
import Social from './Social'
import { Link } from "react-router-dom";
import FaqPage from '../pages/FaqPage';


function Footer(props) {
    return (
        <Paper sx={{
            position: 'relative',
            marginTop: '5%',
            bottom: 0,
            padding: 2,
            width: '100%',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
        }} square variant="outlined">
            <div>
            <Link to='/'  style={{color:'black', fontSize:"18px", textDecoration: "none"}}> Inicio  </Link>
            <Link to='/aboutus'  style={{color:'black', fontSize:"18px", textDecoration: "none"}}> Sobre Nosotros  </Link>
            <Link to='/terms' style={{color:'black', fontSize:"18px", textDecoration: "none"}}> FAQs  </Link>
            <Link to='/contact' style={{color:'black', fontSize:"18px", textDecoration: "none"}}> Contacto</Link>
            </div>
            &copy; {new Date().getFullYear()} FULLSTACK Shoes. Todos los derechos reservados.
            <Social></Social>
        </Paper>
    );
}

export default Footer;