import { Box, Typography } from "@mui/material";

export const Nutrition = () => {
  return (
    <Box>
      <Typography textAlign='justify' fontWeight={300} marginTop={5} fontSize={20}>
        Dependo do estado, a fase da doença e medicamentos utilizados, o paciente pode apresentar inapetência e desinteresse pelo alimento,
        resultando em baixa ingestão alimentar, perda de peso significativa, alta depleção de tecidos e caquexia, fatores que influenciam sua sobrevida.
        Assim, o nutricionista é o profissional capacitado para auxiliar o manejo desses efeitos e promover adequado aporte nutricional, ajustado a cada realidade.
        A nutrição em cuidados paliativos tem como objetivos:
        Reduzir os efeitos adversos provocados pelos tratamentos, como náuseas, vômitos, má absorção, diarreias, saciedade precoce, obstipação intestinal, xerostomia, disfagia, entre outros.
        Retardar a progressão da síndrome anorexia-caquexia;
        Auxiliar no controle de sintomas;
        Manter a hidratação;
        Preservar o peso e a composição corporal;
        Ressignificar o alimento, possibilitando meios e vias para alimentação.
      </Typography>
    </Box>
  );
};
