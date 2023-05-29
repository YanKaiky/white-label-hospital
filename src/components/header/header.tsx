import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, IconButton, Popover, Typography, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from "./logo";

interface IHeaderProps {
  image: string;
}

export const Header: FC<IHeaderProps> = ({ image }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<any>(null);

  const location = useLocation();

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const xlDown = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <>
      <Box
        height='12vh'
        sx={{ background: '#A900F3' }}
      >
        <Box
          justifyContent='end'
          alignItems='center'
          width='100%'
          padding={2}
        >
          <Typography variant="h5" fontSize={(smDown && mdDown && lgDown && xlDown && !xsDown) ? 15 : undefined} sx={{ color: 'white' }}>
            Informações - (47) 98907-3776
          </Typography>

          <Typography variant="caption" fontSize={(smDown && mdDown && lgDown && xlDown && !xsDown) ? 11 : 9} sx={{ color: 'white', marginRight: 3 }}>
            Projeto Acadêmico Téc. Enfermagem SENAC Blumenau - Uso de Imagens Ilustrativas
          </Typography>
        </Box>
      </Box>

      <Box
        height='15vh'
        display='flex'
        justifyContent='space-between'
        sx={{ background: '#fff' }}
      >
        <Logo />

        {xlDown && lgDown ?
          <IconButton sx={{ marginRight: 4 }} onClick={(e) => {
            setAnchorEl(e.currentTarget)
            setOpen(true)
          }}>
            <MenuIcon />
          </IconButton>
          : <Box
            display='flex'
            justifyContent='space-evenly'
            alignItems='center'
            width='40%'
          >
            <Button
              variant="text"
              onClick={() => navigate('/')}
              sx={{
                color: location.pathname === '/' ? '#A900F3' : '#00B65B',
                ":hover": {
                  color: '#A900F3'
                }
              }}
            >
              Home
            </Button>

            <Button
              variant="text"
              onClick={() => navigate('/hospital')}
              sx={{
                color: location.pathname === '/hospital' ? '#A900F3' : '#00B65B',
                ":hover": {
                  color: '#A900F3'
                }
              }}
            >
              O Hospital
            </Button>

            <Button
              variant="text"
              onClick={() => navigate('/direction')}
              sx={{
                color: location.pathname === '/direction' ? '#A900F3' : '#00B65B',
                ":hover": {
                  color: '#A900F3'
                }
              }}
            >
              Direção
            </Button>

            <Button
              variant="text"
              onClick={() => navigate('/jobs')}
              sx={{
                color: location.pathname === '/jobs' ? '#A900F3' : '#00B65B',
                ":hover": {
                  color: '#A900F3'
                }
              }}
            >
              Trabalhe conosco
            </Button>
          </Box>}
      </Box>

      <Box
        sx={{
          position: 'relative',
          paddingY: '10rem',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value to control transparency
          }}
        />

        <Typography
          variant="h5"
          fontSize={(smDown && mdDown && lgDown && xlDown && !xsDown) ? 55 : 70}
          textAlign='center'
          sx={{
            position: 'relative',
            zIndex: 1,
            color: 'white',
            userSelect: 'none'
          }}
        >
          {
            location.pathname === '/hospital' ?
              'O Hospital' : location.pathname === '/direction' ?
                'Direção' : location.pathname === '/jobs' ?
                  'Trabalhe conosco' : location.pathname === '/cuidados-paliativos' ?
                    'Cuidados Paliativos' : 'Home'
          }
        </Typography>
      </Box>


      <Popover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box display='flex' flexDirection='column' alignItems='flex-start' bgcolor='#fff'>
          <Button
            variant="text"
            onClick={() => navigate('/')}
            sx={{
              color: location.pathname === '/' ? '#A900F3' : '#00B65B',
              background: '#fff',
              ":hover": {
                color: '#A900F3'
              }
            }}
          >
            Home
          </Button>

          <Button
            variant="text"
            onClick={() => navigate('/hospital')}
            sx={{
              color: location.pathname === '/hospital' ? '#A900F3' : '#00B65B',
              background: '#fff',
              ":hover": {
                color: '#A900F3'
              }
            }}
          >
            O Hospital
          </Button>

          <Button
            variant="text"
            onClick={() => navigate('/direction')}
            sx={{
              color: location.pathname === '/direction' ? '#A900F3' : '#00B65B',
              background: '#fff',
              ":hover": {
                color: '#A900F3'
              }
            }}
          >
            Direção
          </Button>

          <Button
            variant="text"
            onClick={() => navigate('/jobs')}
            sx={{
              color: location.pathname === '/jobs' ? '#A900F3' : '#00B65B',
              background: '#fff',
              ":hover": {
                color: '#A900F3'
              }
            }}
          >
            Trabalhe conosco
          </Button>
        </Box>
      </Popover>
    </>
  );
};
