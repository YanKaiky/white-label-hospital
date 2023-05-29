import { FC } from "react";
import { SpceialtyCard } from "./specialties.card";
import { Box, Grid, Typography } from "@mui/material";
import heart from '../../assets/heart.png';
import emergency from '../../assets/emergency.jpg';
import maternity from '../../assets/maternity.jpg';
import psicology from '../../assets/psicology.jpg';
import { useNavigate } from "react-router-dom";

export const Specialties: FC = () => {
  const navigate = useNavigate();

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
            image={heart}
            title="Cuidados Paliativos"
            onClick={() => navigate('/cuidados-paliativos')}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SpceialtyCard
            image={emergency}
            title="Emergência"
            url="https://wa.me/554789073776"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SpceialtyCard
            image={maternity}
            title="Pediatria"
            url="https://wa.me/554789073776"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SpceialtyCard
            image={psicology}
            title="Psicologia"
            url="https://wa.me/554789073776"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
