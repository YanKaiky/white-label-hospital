import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const News: FC = () => {
  return (
    <Box marginTop={10} bgcolor='#D1FFFC'>
      <Box paddingY={6} paddingX={8}>
        <Typography variant="h5" sx={{ color: '#002C55' }}>
          Notícias
        </Typography>
      </Box>

      <Grid container spacing={2} textAlign="center" sx={{ paddingBottom: 5 }}>
        <Grid item xs={4} sx={{ ":hover": { transform: 'scale(1.2)', transition: 'transform 0.3s ease' } }}>
          <Link to='https://redesantacatarina.org.br/hospital/santaisabel//SitePages/institucional/noticia-interna.aspx?idnot=140' target="_blank" rel="noopener noreferrer">
            <img
              src="https://redesantacatarina.org.br/hospital/santaisabel/Imagens/Not%C3%ADcias2/IMUNIZA%C3%87%C3%83O%20BEB%C3%8A.jpg"
              alt="Bebê"
              style={{
                width: "80%",
                height: '100%',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={4} sx={{ ":hover": { transform: 'scale(1.2)', transition: 'transform 0.3s ease' } }}>
          <Link to='https://redesantacatarina.org.br/hospital/santaisabel//SitePages/institucional/noticia-interna.aspx?idnot=139' target="_blank" rel="noopener noreferrer">
            <img
              src="https://redesantacatarina.org.br/hospital/santaisabel/Imagens/Not%C3%ADcias2/CAPA%20HIPEC.jpg"
              alt="Imagem 2"
              style={{
                width: "80%",
                height: '100%',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={4} sx={{ ":hover": { transform: 'scale(1.2)', transition: 'transform 0.3s ease' } }}>
          <Link to='https://redesantacatarina.org.br/hospital/santaisabel//SitePages/institucional/noticia-interna.aspx?idnot=138' target="_blank" rel="noopener noreferrer">
            <img
              src="https://redesantacatarina.org.br/hospital/santaisabel/Imagens/Not%C3%ADcias2/CAPA%20ANDREW.jpg"
              alt="Imagem 3"
              style={{
                width: "80%",
                height: '100%',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
              }}
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
