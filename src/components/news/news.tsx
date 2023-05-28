import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { IPCCard } from "../card";

export const News: FC = () => {
  return (
    <Box marginTop={10} bgcolor='#D1FFFC'>
      <Box paddingY={6} paddingX={8}>
        <Typography variant="h5" sx={{ color: '#002C55' }}>
          Notícias
        </Typography>
      </Box>

      <Grid container paddingX={8} sx={{ paddingBottom: 5 }}>
        <Grid item xs={4} sx={{ ":hover": { transform: 'scale(1.2)', transition: 'transform 0.3s ease' } }}>
          <IPCCard
            image="https://redesantacatarina.org.br/hospital/santaisabel/Imagens/Not%C3%ADcias2/IMUNIZA%C3%87%C3%83O%20BEB%C3%8A.jpg"
            url="https://redesantacatarina.org.br/hospital/santaisabel//SitePages/institucional/noticia-interna.aspx?idnot=140"
            title="Imunização infantil"
            subtitle="Saiba tudo sobre a vacinação dos pequenos"
            linkText="Leia mais"
          />
        </Grid>
        <Grid item xs={4} sx={{ ":hover": { transform: 'scale(1.2)', transition: 'transform 0.3s ease' } }}>
          <IPCCard
            image="https://redesantacatarina.org.br/hospital/santaisabel/Imagens/Not%C3%ADcias2/CAPA%20HIPEC.jpg"
            url="https://redesantacatarina.org.br/hospital/santaisabel//SitePages/institucional/noticia-interna.aspx?idnot=139"
            title="Cirugia robótica"
            subtitle="Hospital Santa Isabel realiza cirurgia de ‘citorredução + HIPEC’, inédita no hospital"
            linkText="Leia mais"
          />
        </Grid>
        <Grid item xs={4} sx={{ ":hover": { transform: 'scale(1.2)', transition: 'transform 0.3s ease' } }}>
          <IPCCard
            image="https://redesantacatarina.org.br/hospital/santaisabel/Imagens/Not%C3%ADcias2/CAPA%20ANDREW.jpg"
            url="https://redesantacatarina.org.br/hospital/santaisabel//SitePages/institucional/noticia-interna.aspx?idnot=138"
            title="Cirugia robótica"
            subtitle="Primeira cirurgia robótica no fígado em Santa Catarina é realizado no HSI"
            linkText="Leia mais"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
