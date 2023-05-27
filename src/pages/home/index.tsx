import { Box, Button, Container, Typography } from "@mui/material";
import { GridImage } from "../../components/grid.images/grid.images";
import { Content } from "../../components/content/content";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ background: '#FFD3C1' }}>
      <Box
        height='15vh'
        display='flex'
        justifyContent='space-between'
        sx={{ background: '#fff' }}
      >
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          width='25%'
          padding={2}
        >
          <img
            src={logo}
            alt="Instituto Pequena Fênix"
            height='100%'
          />

          <Typography variant="h5">
            Instituto Pequena Fênix
          </Typography>
        </Box>

        <Box
          display='flex'
          justifyContent='space-evenly'
          alignItems='center'
          width='40%'
        >
          <Button variant="text" color="inherit" onClick={() => navigate('/home2')}>
            Nossa Rede
          </Button>

          <Button variant="text" color="inherit" onClick={() => navigate('/home3')}>
            Equipe Técnica
          </Button>

          <Button variant="text" color="inherit" onClick={() => navigate('/home4')}>
            Trabalhe conosco
          </Button>

          <Button variant="text" color="inherit" onClick={() => navigate('/home5')}>
            Sobre
          </Button>
        </Box>
      </Box>
      <Header />

      <Container>
        <Content />

        <Content />
      </Container>

      <GridImage />

      <Footer />
    </Box >
  );
};
