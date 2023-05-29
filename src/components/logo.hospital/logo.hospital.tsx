import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import logo from '../../assets/logo.png';

export const LogoHospital = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const xlDown = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <Box
      display='flex'
      justifyContent='flex-start'
      alignItems='center'
      padding={5}
      gap={2}
    >
      <img
        src={logo}
        alt="Instituto Pequena Fênix - IPF"
        width='20%'
      />

      <Typography
        variant="h4"
        fontSize={(smDown && mdDown && lgDown && xlDown && !xsDown) ? 28 : undefined}
        sx={{ userSelect: 'none', color: '#002C55' }}
      >
        Instituto Pequena Fênix
      </Typography>
    </Box>
  );
};
