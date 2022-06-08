import React from 'react'
import { AppBar, Toolbar, Typography, Box, IconButton } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify';

import './NavBar.css'

function NavBar() {

    const navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();

    function goLogout() {
        if (token != '') {
            dispatch(addToken(''))
            toast.info('Usuário Deslogado!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate('/login')
        }
    }

    var navbarComponent;

    if (token != '') {
        navbarComponent = <AppBar position="static">
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
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}
export default NavBar