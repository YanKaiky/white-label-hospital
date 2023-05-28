import { IPFBody } from "../../layouts/IPFBody";
import headerImage from "../../assets/jobs.jpg";
import { Job } from "../../components/job/job";
import { Box, Divider, List, Typography } from "@mui/material";

export const Jobs = () => {
  return (
    <IPFBody image={headerImage}>
      <Box paddingY={6} paddingX={8}>
        <Typography variant="h5" sx={{ color: '#002C55' }}>
          Vagas
        </Typography>
      </Box>

      <List sx={{ marginBottom: '2rem', marginX: '3rem' }}>
        <Job
          url="https://www.linkedin.com/jobs/view/t%C3%A9cnico-em-enfermagem-at-hospital-azambuja-3611655470/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic&originalSubdomain=br"
          title="Técnico em Enfermagem"
          description="Controlar e orientar os pacientes sobre os medicamentos que foram receitados pelo médico. Além dos medicamentos de via oral, os técnicos também podem fazer a aplicação de injetáveis, se assim for solicitado pelos médicos. Curso concluído; Coren SC ativo; Preferível ter experiência no sistema Tasy."
          location="Brusque, Santa Catarina"
        />

        <Divider />

        <Job
          url="https://www.linkedin.com/jobs/view/pessoa-psic%C3%B3loga-organizacional-atua%C3%A7%C3%A3o-h%C3%ADbrida-em-blumenau-sc-at-amcom-3598410154/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic&originalSubdomain=br"
          title="Pessoa Psicóloga Organizacional - Atuação híbrida em Blumenau/SC"
          description="A posição de Psicólogo Organizacional, vai te oferecer a chance de participar da construção de projetos e iniciativas para fortalecimento das nossas ações de treinamento, saúde e bem-estar."
          location="Blumenau, Santa Catarina"
        />

        <Divider />

        <Job
          url="https://www.linkedin.com/jobs/collections/recommended/?currentJobId=3602845511"
          title="Desenvolvedor FullStack JS"
          description="Necessários conhecimentos em ReactJS, NodeJS, TypeScript, DigitalOcean"
          location="Blumenua, SC"
        />

        <Divider />

        <Job
          url="https://www.linkedin.com/jobs/view/jovem-aprendiz-pp-brusque-santa-terezinha-at-netvagas-3619967895/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic&originalSubdomain=br"
          title="Jovem aprendiz pp brusque santa terezinha"
          description="Faz atendimento telefônico, verificando qual a necessidade do cliente ou filial."
          location="Brusque, Santa Catarina"
        />

        <Divider />

        <Job
          url="https://www.linkedin.com/jobs/view/auxiliar-de-recursos-humanos-at-ceu-rh-3616756175/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic&originalSubdomain=br"
          title="Auxiliar de recursos humanos"
          description="Irá atuar com rotinas inerentes a função."
          location="Brusque, Santa Catarina"
        />
      </List>
    </IPFBody>
  );
};
