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

      <Grid container paddingX={8} spacing={2} sx={{ paddingBottom: 5 }}>
        <Grid item xs={12} sm={6} md={4} sx={{ ":hover": { transform: 'scale(1.2)', transition: 'transform 0.3s ease' } }}>
          <IPCCard
            image="https://redesantacatarina.org.br/hospital/santaisabel/Imagens/Not%C3%ADcias2/IMUNIZA%C3%87%C3%83O%20BEB%C3%8A.jpg"
            url="https://redesantacatarina.org.br/hospital/santaisabel//SitePages/institucional/noticia-interna.aspx?idnot=140"
            title="Imunização infantil"
            subtitle="Saiba tudo sobre a vacinação dos pequenos"
            linkText="Leia mais"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ ":hover": { transform: 'scale(1.2)', transition: 'transform 0.3s ease' } }}>
          <IPCCard
            image="https://redesantacatarina.org.br/hospital/santaisabel/Imagens/Not%C3%ADcias2/PL%C3%81STICO-MATERNIDADE.jpg"
            url="https://redesantacatarina.org.br/hospital/santaisabel/SitePages/institucional/noticia-interna.aspx?idnot=131"
            title="Iniciativa do IPF torna partos ainda mais humanizados"
            subtitle="Mães e pais que passaram pela experiência aprovaram, maravilhados com a nova possibilidade"
            linkText="Leia mais"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ ":hover": { transform: 'scale(1.2)', transition: 'transform 0.3s ease' } }}>
          <IPCCard
            image="https://redesantacatarina.org.br/hospital/santaisabel/Imagens/Not%C3%ADcias2/CURSO%20PRESENCIAL.jpg"
            url="https://redesantacatarina.org.br/hospital/santaisabel/SitePages/institucional/noticia-interna.aspx?idnot=126"
            title="IPF reabre Curso de Gestantes presencial"
            subtitle="Após dois anos online, estão abertas as inscrições para a primeira edição do Curso de Gestantes do Hospital Santa Isabel pós-pandemia."
            linkText="Leia mais"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
