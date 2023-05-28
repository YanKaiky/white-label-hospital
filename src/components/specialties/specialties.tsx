import { FC } from "react";
import { SpceialtyCard } from "./specialties.card";
import { Box, Grid, Typography } from "@mui/material";
import emergency from '../../assets/emergency.jpg';
import maternity from '../../assets/maternity.jpg';
import neurology from '../../assets/neurology.jpg';

export const Specialties: FC = () => {
  return (
    <Box>
      <Box paddingY={6} paddingX={8}>
        <Typography variant="h5" sx={{ color: '#002C55' }}>
          Especialidades
        </Typography>
      </Box>

      <Grid container>
        <Grid item xs={12} sm={4}>
          <SpceialtyCard
            image={emergency}
            title="Emergência"
            url="https://www.instagram.com/p/Cq1KhvnpOia/"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SpceialtyCard
            image={maternity}
            title="Maternidade"
            url="https://www.instagram.com/p/Cq1KhvnpOia/"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SpceialtyCard
            image={neurology}
            title="Neurologia"
            url="https://www.instagram.com/p/Cq1KhvnpOia/"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
