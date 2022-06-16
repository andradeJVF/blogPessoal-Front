import React, { useEffect } from 'react'
import { Typography, Box, Grid, Button } from '@material-ui/core'
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem'
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { TokenState } from '../../store/tokens/tokensReducer'
import './Home.css'
import { toast } from 'react-toastify'

function Home() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.info('Você precisa estar logado!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
    });
      navigate("/login")

    }
  }, [token])

  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" className='back' >
        <Grid alignItems="center" item xs={6} >
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to='/posts' className='link'>
              <Button variant="outlined" className='button'>Ver Postagens</Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} >

        </Grid>
        <Grid xs={10} className='postagens'>
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  )
}

export default Home