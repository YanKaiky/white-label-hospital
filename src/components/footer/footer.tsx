import { FC } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ods from '../../assets/ods.png';
import sentinela from '../../assets/sentinela-hsi.png';
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <Box bgcolor='#fff' paddingBottom={2}>
      <footer>
        <Box display='flex' justifyContent='center' alignItems='center' paddingY={2}>
          <Box>
            <img src={ods} alt='ODS' width='30%' />
            <img src={sentinela} alt='Rede sentinela' width='55%' />
          </Box>

          <Box>
            <Link to='https://www.instagram.com/eliza_beatrizh/' target="_blank" rel="noopener noreferrer">
              <IconButton sx={{
                ":hover": {
                  color: '#FF84D4'
                }
              }}>
                {/* https://www.instagram.com/eliza_beatrizh/ */}
                <InstagramIcon />
              </IconButton>
            </Link>

            <Link to='https://www.facebook.com/profile.php?id=100010598268602' target="_blank" rel="noopener noreferrer">
              <IconButton sx={{
                ":hover": {
                  color: '#FF84D4'
                }
              }}>
                {/* https://www.facebook.com/profile.php?id=100010598268602 */}
                <FacebookIcon />
              </IconButton>
            </Link>

            <Link to='https://twitter.com/Twitter' target="_blank" rel="noopener noreferrer">
              <IconButton sx={{
                ":hover": {
                  color: '#FF84D4'
                }
              }}>
                {/* https://twitter.com/Twitter */}
                <TwitterIcon />
              </IconButton>
            </Link>

            <Link to='https://www.linkedin.com/in/yankaiky/' target="_blank" rel="noopener noreferrer">
              <IconButton sx={{
                ":hover": {
                  color: '#FF84D4'
                }
              }}>
                {/* https://www.linkedin.com/in/yankaiky/ */}
                <LinkedInIcon />
              </IconButton>
            </Link>
          </Box>
        </Box>

        <Typography color="textSecondary" textAlign='center' fontSize={15}>
          &copy; {new Date().getFullYear()} Instituto Pequena Fênix. Todos os direitos reservados.
        </Typography>
      </footer>
    </Box>
  );
};
