import { FC } from "react";
import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Content: FC = () => {
  return (
    <Container>
      <Typography textAlign='justify' fontWeight={300} marginTop={10} fontSize={20}>
        Há mais de 8 anos no Brasil, O Instituto Pequena Fênix é responsável pela administração de 17 entidades
        com atuação social, em saúde e educação infantil, que formam o IPF.
        Com um modelo de gestão em que o superávit gerado é aplicado em nossas obras a fim de executar dignamente nossas atividades,
        a instituição acolhe e cuida do ser humano em todo o ciclo da vida. Ao todo são cerca de 4 mil colaboradores distribuídos
        em diversas instituições de saúde, mantendo inúmeros estabelecimentos de ensino e acolhendo crianças e seus tutores em espaços assistenciais,
        com atendimento humanizado e serviços de qualidade para milhares de pessoas em sete
        Estados brasileiros (Maranhão, Santa Catarina e São Paulo).
      </Typography>

      <Typography textAlign='justify' fontWeight={300} marginTop={5} fontSize={20}>
        Seguindo os passos das Fundadoras e da enfermeira <Link to='https://www.instagram.com/julie._.costa/' target="_blank" rel="noopener noreferrer"><Typography component='span' sx={{ color: "blue" }}>Juliê Costa</Typography></Link>,
        trabalhando com dedicação, a instituição atende com especialização na área infanto juvenil, sendo referência nos cuidados paliativos,
        contemplando pacientes de Planos de Saúde e Convênios, Particulares e através do Sistema Único de Saúde.
        Num espaço de mais de 28 mil m², a unidade hospitalar conta com o único heliponto da região homologado pela Anac,
        que recebe aeronaves de até 6 toneladas para transporte de pacientes.
      </Typography>
    </Container>
  );
};
