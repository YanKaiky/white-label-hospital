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
        height='10vh'
        sx={{ background: '#A900F3' }}
      >
        <Box
          justifyContent='end'
          alignItems='center'
          width='100%'
          padding={2}
        >
          <Typography variant="h5" fontSize={(smDown && mdDown && lgDown && xlDown && !xsDown) ? 16 : undefined} sx={{ color: 'white' }}>
            Informações - (47) 8907-3776
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
              onClick={() => navigate('/home')}
              sx={{
                color: location.pathname === '/home' ? '#D800BE' : '#00B65B',
                ":hover": {
                  color: '#D800BE'
                }
              }}
            >
              Home
            </Button>

            <Button
              variant="text"
              onClick={() => navigate('/hospital')}
              sx={{
                color: location.pathname === '/hospital' ? '#D800BE' : '#00B65B',
                ":hover": {
                  color: '#D800BE'
                }
              }}
            >
              O Hospital
            </Button>

            <Button
              variant="text"
              onClick={() => navigate('/direction')}
              sx={{
                color: location.pathname === '/direction' ? '#D800BE' : '#00B65B',
                ":hover": {
                  color: '#D800BE'
                }
              }}
            >
              Direção
            </Button>

            <Button
              variant="text"
              onClick={() => navigate('/jobs')}
              sx={{
                color: location.pathname === '/jobs' ? '#D800BE' : '#00B65B',
                ":hover": {
                  color: '#D800BE'
                }
              }}
            >
              Trabalhe conosco
            </Button>
          </Box>}
      </Box>

      <Box sx={{
        position: 'relative',
        textAlign: 'center',
        paddingY: '10rem',
        color: '#fff',
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          userSelect: 'none'
        }}>
          <img
            src={image}
            alt="Imagem 1"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.5)',
            }}
          />
        </Box>
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
            onClick={() => navigate('/home')}
            sx={{
              color: location.pathname === '/home' ? '#D800BE' : '#00B65B',
              background: '#fff',
              ":hover": {
                color: '#D800BE'
              }
            }}
          >
            Home
          </Button>

          <Button
            variant="text"
            onClick={() => navigate('/hospital')}
            sx={{
              color: location.pathname === '/hospital' ? '#D800BE' : '#00B65B',
              background: '#fff',
              ":hover": {
                color: '#D800BE'
              }
            }}
          >
            O Hospital
          </Button>

          <Button
            variant="text"
            onClick={() => navigate('/direction')}
            sx={{
              color: location.pathname === '/direction' ? '#D800BE' : '#00B65B',
              background: '#fff',
              ":hover": {
                color: '#D800BE'
              }
            }}
          >
            Direção
          </Button>

          <Button
            variant="text"
            onClick={() => navigate('/jobs')}
            sx={{
              color: location.pathname === '/jobs' ? '#D800BE' : '#00B65B',
              background: '#fff',
              ":hover": {
                color: '#D800BE'
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
