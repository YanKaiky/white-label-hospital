import { FC } from "react";
import { Container, Typography } from "@mui/material";

export const Content: FC = () => {
  return (
    <Container>
      <Typography textAlign='justify' fontWeight={300} marginTop={10} fontSize={20}>
        Há mais de 8 anos no Brasil, a Associação Congregação de Santa Catarina (ACSC) é responsável pela administração de 17 entidades
        com atuação social, em saúde e educação infantil, que formam a Rede Santa Catarina.
        Com um modelo de gestão em que o superávit gerado é aplicado em nossas obras a fim de executar dignamente nossas atividades,
        a instituição acolhe e cuida do ser humano em todo o ciclo da vida. Ao todo são cerca de 4 mil colaboradores distribuídos
        em diversas instituições de saúde, mantendo inúmeros estabelecimentos de ensino e acolhendo crianças, adultos e idosos em espaços assistenciais,
        com atendimento humanizado e serviços de qualidade para milhares de pessoas em sete
        Estados brasileiros (Espírito Santo, Goiás, Maranhão, Minas Gerais, Rio de Janeiro, Santa Catarina e São Paulo).
      </Typography>

      <Typography textAlign='justify' fontWeight={300} marginTop={5} fontSize={20}>
        Seguindo os passos de Madre Regina Protmann, trabalhando com dedicação, determinação e disciplina, e guiados sob proteção de Santa Catarina de
        Alexandria e Santa Isabel da Hungria, o Hospital Santa Isabel é uma entidade filantrópica pertencente à Rede Instituto Pequena Fênix
        que atua com a missão de acolher e cuidar do ser humano durante todo o ciclo da vida.
      </Typography>

      <Typography textAlign='justify' fontWeight={300} marginY={5} fontSize={20}>
        A instituição atende 46 especialidades médicas, contemplando pacientes de Planos de Saúde e Convênios, Particulares e através do Sistema Único de Saúde.
        Num espaço de mais de 28 mil m², a unidade hospitalar conta com o único heliponto da região homologado pela Anac,
        que recebe aeronaves de até 6 toneladas para transporte de pacientes e órgãos para transplantes.
      </Typography>
    </Container>
  );
};
