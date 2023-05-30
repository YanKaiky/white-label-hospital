import { Box, Typography } from "@mui/material";

export const PalliativeMedicine = () => {
  return (
    <Box>
      <Typography textAlign='justify' fontWeight={300} marginTop={5} fontSize={20}>
        Claro que é muito angustiante receber o diagnóstico de uma doença grave. Ela costuma vir acompanhada, além dos sintomas físicos, de questões profundas de ordem social,
        psicológica e espiritual. Um diagnóstico difícil traz à tona questões como o medo da morte, a apreensão em deixar a família desamparada,
        conflitos do passado e até problemas de ordem prática, como o afastamento do trabalho e a consequente queda de renda, entre outras.
      </Typography>

      <Typography textAlign='justify' fontWeight={300} marginTop={2} fontSize={20}>
        Todas essas indagações não podem ser tratadas e abordadas por um único profissional. Por isso, as equipes de cuidados paliativos são multidisciplinares.
        O médico paliativista atua para melhorar o conforto físico do paciente – amenizar a dor, diminuir o mal-estar causado pela doença ou pelo seu tratamento – e toda a
        equipe trabalha para que esses incômodos e todos os outros sejam atenuados para melhoria da qualidade de vida de quem está enfermo e de sua família e amigos.
      </Typography>
    </Box>
  );
};
