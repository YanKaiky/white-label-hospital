import { IPFBody } from "../../layouts/IPFBody";
import headerImage from "../../assets/direction.png";
import { DirectionPerson } from "../../components/direction.person/direction.person";

export const Direction = () => {
  return (
    <IPFBody image={headerImage}>
      <DirectionPerson
        job="Gerente - Técnica em Enfermagem"
        name="Carolinny Neves Moreira"
        bgcolor="#00DDA1"
      />

      <DirectionPerson
        image="https://pps.whatsapp.net/v/t61.24694-24/341056235_778344066865459_2316432112119543498_n.jpg?ccb=11-4&oh=01_AdQxXSb0hbrS6orrfGVVBnVM00ErZ9ybcdx9cePI3jAV_A&oe=647FF78A"
        job="CEO - Técnica em Enfermagem"
        name="Eliza Beatriz Pires"
      />

      <DirectionPerson
        job="Presidente - Técnica em Enfermagem"
        name="Ellen Franciene Chagas Ribeiro"
        bgcolor="#FF4600"
      />

      <DirectionPerson
        job="Diretora - Técnica em Enfermagem"
        name="Gicélia Maria Gonçalves Vieira"
        bgcolor="#FF00C1"
      />

      <DirectionPerson
        job="Analista Sênior - Técnica em Enfermagem"
        name="Miriam Prado Guarnieri"
        bgcolor="#0097FF"
      />


    </IPFBody>
  );
};
