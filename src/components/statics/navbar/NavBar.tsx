import React from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './NavBar.css'
import useLocalStorage from 'react-use-localstorage';

function NavBar() {

    const [token, setToken] = useLocalStorage('token');
    const navigate = useNavigate();

    function goLogout() {
        if (token != '') {
            setToken('')
            alert("Usuário Deslogado!")
            navigate('/login')
        }
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='bar'>

                    <Typography className='cursor' variant="h5" color="inherit">
                        Blog Pessoal
                    </Typography>

                    <Box mx={1} display='flex' justifyContent='start'>
                        <Link to='/home' className='links'><Typography variant="h6" color="inherit">Home</Typography></Link>
                        <Link to='/posts' className='links'><Typography variant="h6" color="inherit">Postagens</Typography></Link>
                        <Link to='/temas' className='links'><Typography variant="h6" color="inherit">Temas</Typography></Link>
                        <Link to='/formularioTema' className='links'><Typography variant="h6" color="inherit">Cadastrar Tema</Typography></Link>
                    </Box>

                    <IconButton className='text-decorator-none' edge="start" color="inherit" aria-label="menu" onClick={goLogout}>
                        <ExitToAppIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>
        </>
    )
}
export default NavBar