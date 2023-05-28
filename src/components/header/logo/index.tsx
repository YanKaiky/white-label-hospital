import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import logo from '../../../assets/logo.png';

export const Logo = () => {
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
      width='70%'
      padding={2}
      gap={2}
    >
      <img
        src={logo}
        alt="Instituto Pequena Fênix - IPF"
        height={mdDown ? '75%' : '100%'}
      />

      <Typography
        variant="h5"
        fontSize={(smDown && mdDown && lgDown && xlDown && !xsDown) ? 16 : undefined}
        sx={{ userSelect: 'none', color: '#002C55' }}
      >
        Instituto Pequena Fênix - IPF
      </Typography>
    </Box>
  );
};
