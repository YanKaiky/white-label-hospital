import { IPFBody } from "../../layouts/IPFBody";
import { DirectionPerson } from "../../components/direction.person/direction.person";
import { Box, List, Typography } from "@mui/material";
import headerImage from "../../assets/direction.png";
import carol from "../../assets/carol.jpeg";
import eliza from "../../assets/eliza.jpeg";
import ellen from "../../assets/ellen.jpeg";
import gicelia from "../../assets/gicelia.jpeg";
import miriam from "../../assets/miriam.jpeg";
import julie from "../../assets/julie.jpeg";

export const Direction = () => {
  return (
    <IPFBody image={headerImage}>
      <Box paddingY={6} paddingX={8}>
        <Typography variant="h5" sx={{ color: '#002C55' }}>
          Técnicas
        </Typography>
      </Box>

      <List sx={{ marginBottom: '2rem', marginX: '3rem' }}>
        <DirectionPerson
          image={carol}
          job="Gerente - Técnica em Enfermagem"
          name="Carolinny Neves Moreira"
          url="https://www.instagram.com/carolinnyneves"
        />

        <DirectionPerson
          image={eliza}
          job="CEO - Técnica em Enfermagem"
          name="Eliza Beatriz Pires"
          url="https://www.instagram.com/eliza_beatrizh"
        />

        <DirectionPerson
          image={ellen}
          job="Presidente - Técnica em Enfermagem"
          name="Ellen Franciene Chagas Ribeiro"
          url="https://www.instagram.com"
        />

        <DirectionPerson
          image={gicelia}
          job="Coordenadora - Técnica em Enfermagem"
          name="Gicélia Maria Gonçalves Vieira"
          url="https://www.instagram.com/gicelia.goncalves"
        />

        <DirectionPerson
          image={julie}
          job="Diretora - Técnica em Enfermagem"
          name="Juliê Costa"
          url="https://www.instagram.com/julie._.costa"
        />

        <DirectionPerson
          image={miriam}
          job="Analista Sênior - Técnica em Enfermagem"
          name="Miriam Prado Guarnieri"
          url="https://www.instagram.com/mih_guarnieri"
        />
      </List>
    </IPFBody>
  );
};
