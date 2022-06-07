import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';

import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != '') {
        footerComponent = <Grid container direction="row" justifyContent="space-between" alignItems="center" xs={12} className='box1' >

            <Box className='box2' >
                <a href="https://www.linkedin.com/in/jo%C3%A3o-andrade-580270217/" target="_blank"><LinkedInIcon className='redes' /></a>
                <a href="https://github.com/andradeJVF" target="_blank"><GitHubIcon className='redes' /></a>
                <a href="https://www.instagram.com/andrade__jv/" target="_blank"><InstagramIcon className='redes' /></a>
            </Box>

            <Box className='box3'>
                <Typography variant="subtitle2" align="center" gutterBottom className='box3'>© 2022 Copyright:</Typography>
                <a target="_blank" href="mailto:joao.felixandrade1201@gmail.com"><Typography variant="subtitle2" gutterBottom align="center" className='box3'>João Vitor Felix de Andrade</Typography></a>
            </Box>

        </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer