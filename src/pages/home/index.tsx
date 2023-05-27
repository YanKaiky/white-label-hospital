import { Box, Container, Grid, Paper, Typography } from "@mui/material";

export const HomePage = () => {
  return (
    <Box>
      <header></header>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Instituto Alto Gnomo
        </Typography>

        <Typography variant="body1" gutterBottom>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse reiciendis voluptate adipisci veniam suscipit numquam
          soluta beatae minima quis molestiae, nam deleniti, excepturi, dolorem culpa saepe? Quasi dolorum debitis odio.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit veniam id eum tempore tenetur neque nihil eos
          veritatis est voluptate, illum at cumque incidunt repudiandae dolorum. Cumque doloremque sit ut.

          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse reiciendis voluptate adipisci veniam suscipit numquam
          soluta beatae minima quis molestiae, nam deleniti, excepturi, dolorem culpa saepe? Quasi dolorum debitis odio.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit veniam id eum tempore tenetur neque nihil eos
          veritatis est voluptate, illum at cumque incidunt repudiandae dolorum. Cumque doloremque sit ut.

          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse reiciendis voluptate adipisci veniam suscipit numquam
          soluta beatae minima quis molestiae, nam deleniti, excepturi, dolorem culpa saepe? Quasi dolorum debitis odio.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit veniam id eum tempore tenetur neque nihil eos
          veritatis est voluptate, illum at cumque incidunt repudiandae dolorum. Cumque doloremque sit ut.
        </Typography>
      </Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <img src="https://i.pinimg.com/736x/80/f8/7d/80f87da58b4aa37bf32abb14fa77f42e.jpg" alt="Imagem 1" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <img src="https://i.pinimg.com/736x/80/f8/7d/80f87da58b4aa37bf32abb14fa77f42e.jpg" alt="Imagem 2" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <img src="https://i.pinimg.com/736x/80/f8/7d/80f87da58b4aa37bf32abb14fa77f42e.jpg" alt="Imagem 3" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <img src="https://i.pinimg.com/736x/80/f8/7d/80f87da58b4aa37bf32abb14fa77f42e.jpg" alt="Imagem 4" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <img src="https://i.pinimg.com/736x/80/f8/7d/80f87da58b4aa37bf32abb14fa77f42e.jpg" alt="Imagem 5" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <img src="https://i.pinimg.com/736x/80/f8/7d/80f87da58b4aa37bf32abb14fa77f42e.jpg" alt="Imagem 6" />
          </Paper>
        </Grid>
      </Grid>

      <footer>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Instituto Alto Gnomo. Todos os direitos reservados.
        </Typography>
      </footer>
    </Box>
  );
};
