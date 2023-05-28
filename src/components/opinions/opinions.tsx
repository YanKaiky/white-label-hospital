import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { CardAvatar } from "../card/card.avatar";

export const Opinions: FC = () => {
  return (
    <Box marginTop={10}>
      <Box paddingY={6} paddingX={8}>
        <Typography variant="h5" sx={{ color: '#002C55' }}>
          Avaliações
        </Typography>
      </Box>

      <Grid container paddingX={8} spacing={2} sx={{ paddingBottom: 5 }}>
        <Grid item xs={12} sm={6} md={4}>
          <CardAvatar
            image="https://towty.com.br/wp-content/uploads/2022/08/Yan_kaiky_8429-530x400.jpg"
            title="Yan Kaiky A. dos Santos"
            subtitle="O avanço da digitalização e tecnologia otimizaram a jornada dos pacientes que melhoraram sua avaliação dos hospitais"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <CardAvatar
            image="https://img.freepik.com/fotos-premium/foto-de-rosto-de-mulher-jovem-latina-feliz-com-fundo-de-expressao-de-sorriso-com-espaco-de-copia-retrato-de-rosto-de-pessoas-reais-etnicas-da-america-do-sul-boliviana_394926-96.jpg"
            title="Jacira Nunes"
            subtitle="O avanço da digitalização e tecnologia otimizaram a jornada dos pacientes que melhoraram sua avaliação dos hospitais"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <CardAvatar
            image="https://static1.minhavida.com.br/articles/64/fe/df/e8/mediabox-pessoas-sempre-insatisfeitas-orig-1.jpg"
            title="Eduarda de Souza"
            subtitle="O avanço da digitalização e tecnologia otimizaram a jornada dos pacientes que melhoraram sua avaliação dos hospitais"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
