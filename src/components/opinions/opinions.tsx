import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { CardAvatar } from "../card/card.avatar";
import child from '../../assets/child.jpeg';
import diana from '../../assets/diana.jpg';

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
            subtitle="Equipe completa e preparada para com a saúde da minha filha. Desde atendimento diário ao psicólogico."
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <CardAvatar
            image={diana}
            title="Diana Santos"
            subtitle="Tive muitos medos com o diagnóstico da minha filha e procurei apoio e conforto tanto para ela quanto para mim. O Ins. Pequena Fênix foi minha melhor escolha."
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <CardAvatar
            image={child}
            title="Lucas Anthony Prado"
            subtitle="Gosto dos dias de brincadeiras, tivemos até uma montanha russa no quarto! Foi muito legal."
          />
        </Grid>
      </Grid>
    </Box>
  );
};
