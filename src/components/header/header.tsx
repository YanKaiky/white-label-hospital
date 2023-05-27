import headerImage from "../../assets/background-header.png";
import { Box, Typography } from '@mui/material';

export const Header = () => {
  return (
    <Box sx={{
      position: 'relative',
      textAlign: 'center',
      paddingTop: '6rem',
      color: '#fff',
    }}>
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}>
        <img
          src={headerImage}
          alt="Imagem 1"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.5,
          }}
        />
      </Box>

      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        paddingBottom='6rem'
      >
        Instituto Pequena Fênix
      </Typography>
    </Box >
  );
};
