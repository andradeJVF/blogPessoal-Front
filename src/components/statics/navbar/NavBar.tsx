import React from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './NavBar.css'

function NavBar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='bar'>

                    <Typography className='cursor' variant="h5" color="inherit">
                        Blog Pessoal
                    </Typography>

                    <Box className='links' mx={1} display='flex' justifyContent='start'>
                        <Typography variant="h6" color="inherit">Home</Typography>
                        <Typography variant="h6" color="inherit">Postagens</Typography>
                        <Typography variant="h6" color="inherit">Temas</Typography>
                        <Typography variant="h6" color="inherit">Cadastrar Tema</Typography>
                    </Box>

                    <IconButton className='text-decorator-none' edge="start" color="inherit" aria-label="menu">
                        <Link to='/login' className='text-decorator-none'>
                            <ExitToAppIcon />
                        </Link>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </>
    )
}
export default NavBar