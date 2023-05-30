import { Box, Typography } from "@mui/material";

export const Nutrition = () => {
  return (
    <Box>
      <Typography textAlign='justify' fontWeight={300} marginTop={5} fontSize={20}>
        Dependo do estado, a fase da doença e medicamentos utilizados, o paciente pode apresentar inapetência e desinteresse pelo alimento, resultando em
        baixa ingestão alimentar, perda de peso significativa, alta depleção de tecidos e caquexia, fatores que influenciam sua sobrevida.
        Assim, o nutricionista é o profissional capacitado para auxiliar o manejo desses efeitos e promover adequado aporte nutricional,
        ajustado a cada realidade.
      </Typography>

      <Typography textAlign='justify' fontWeight={300} marginTop={2} fontSize={20}>
        A nutrição em cuidados paliativos tem como objetivos:
      </Typography>

      <Typography textAlign='justify' fontWeight={300} marginTop={2} fontSize={20}>
        Reduzir os efeitos adversos provocados pelos tratamentos, como náuseas, vômitos, má absorção, diarreias, saciedade precoce, obstipação intestinal, xerostomia, disfagia, entre outros;
      </Typography>
      <Typography textAlign='justify' fontWeight={300} fontSize={20}>
        Retardar a progressão da síndrome anorexia-caquexia;
      </Typography>

      <Typography textAlign='justify' fontWeight={300} fontSize={20}>
        Auxiliar no controle de sintomas;
      </Typography>
      <Typography textAlign='justify' fontWeight={300} fontSize={20}>
        Manter a hidratação;
      </Typography>
      <Typography textAlign='justify' fontWeight={300} fontSize={20}>
        Preservar o peso e a composição corporal;
      </Typography>
      <Typography textAlign='justify' fontWeight={300} fontSize={20}>
        Ressignificar o alimento, possibilitando meios e vias para alimentação.
      </Typography>
    </Box >
  );
};
