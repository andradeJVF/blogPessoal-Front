import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';

import './ListaTema.css';
import { busca } from '../../../services/Service';


function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([])
  const [token, setToken] = useLocalStorage('token')
  let navigate = useNavigate();

  useEffect(() => {
    if (token == '') {
      alert("Você precisa estar logado!")
      navigate('/login')
    }
  }, [token])

  async function getTema() {
    await busca('/tema', setTemas, {
      Headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
        {
          temas.map(tema => (

            <Box display='flex' justifyContent='flex-start' paddingTop={2} paddingLeft={2}>
              <Card className='card' variant="outlined">
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Tema
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {tema.descricao}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box display="flex" justifyContent="center" mb={1.5} >

                    <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                          atualizar
                        </Button>
                      </Box>
                    </Link>
                    <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                      <Box mx={1}>
                        <Button variant="contained" size='small' color="secondary">
                          deletar
                        </Button>
                      </Box>
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Box>

          ))}
    </>
  );
}

export default ListaTema;