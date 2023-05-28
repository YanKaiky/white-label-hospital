import { FC } from "react";
import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ods from '../../assets/ods.png';
import sentinela from '../../assets/sentinela-hsi.png';
import ona from '../../assets/ona.png';

export const Footer: FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const xlDown = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <Box bgcolor='#fff' paddingBottom={2}>
      <footer>
        <Box display='flex' justifyContent='center' alignItems='center' paddingY={2}>
          <Box width={smDown ? '60%' : undefined}>
            <img src={ods} alt='Objetivos de Desenvolvimento Sustentável - ODS' width='19%' title='Objetivos de Desenvolvimento Sustentável - ODS' />
            <img src={sentinela} alt='Rede sentinela' width='36%' title='Rede sentinela' />
            <img src={ona} alt='Organização Nacional de Acreditação - ONA' width='15%' title='Organização Nacional de Acreditação - ONA' />
          </Box>

          <Box width={smDown ? '40%' : undefined} textAlign='end'>
            <Link to='https://www.instagram.com/eliza_beatrizh/' target="_blank" rel="noopener noreferrer">
              <IconButton sx={{
                ":hover": {
                  color: '#A900F3'
                }
              }}>
                <InstagramIcon sx={{ fontSize: smDown ? 15 : 18 }} />
              </IconButton>
            </Link>

            <Link to='https://www.facebook.com/profile.php?id=100010598268602' target="_blank" rel="noopener noreferrer">
              <IconButton sx={{
                ":hover": {
                  color: '#A900F3'
                }
              }}>
                <FacebookIcon sx={{ fontSize: smDown ? 15 : 18 }} />
              </IconButton>
            </Link>

            <Link to='https://wa.me/554789073776' target="_blank" rel="noopener noreferrer">
              <IconButton sx={{
                ":hover": {
                  color: '#A900F3'
                }
              }}>
                <WhatsAppIcon sx={{ fontSize: smDown ? 15 : 18 }} />
              </IconButton>
            </Link>

            <Link to='https://www.linkedin.com/in/yankaiky/' target="_blank" rel="noopener noreferrer">
              <IconButton
                sx={{
                  ":hover": {
                    color: '#A900F3'
                  }
                }}>
                <LinkedInIcon sx={{ fontSize: smDown ? 15 : 18 }} />
              </IconButton>
            </Link>
          </Box>
        </Box>

        <Typography color="textSecondary" textAlign='center' fontSize={smDown ? 12 : xlDown && lgDown ? 15 : undefined}>
          &copy; {new Date().getFullYear()} Instituto Pequena Fênix. Todos os direitos reservados.
        </Typography>
      </footer>
    </Box>
  );
};
