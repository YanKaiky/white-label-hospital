import { FC } from "react";
import { Grid } from "@mui/material";
import emergency from '../../assets/emergency.jpg';
import maternity from '../../assets/maternity.jpg';
import neurology from '../../assets/neurology.jpg';
import { SpceialtyCard } from "./specialties.card";

export const Specialties: FC = () => {
  return (
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
  );
};
