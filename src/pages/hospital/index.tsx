import { Content } from "../../components/content/content";
import { IPFBody } from "../../layouts/IPFBody";
import { LogoHospital } from "../../components/logo.hospital/logo.hospital";
import { Opinions } from "../../components/opinions/opinions";
import headerImage from "../../assets/hospital.png";
import { Mission } from "./mission";
import { Vision } from "./vision";
import { Values } from "./values";
import { Container } from "@mui/material";

export const Hospital = () => {

  return (
    <IPFBody image={headerImage}>
      <LogoHospital />

      <Content />

      <Container sx={{ marginTop: 10 }}>
        <Mission />
        <Vision />
        <Values />
      </Container>

      <Opinions />
    </IPFBody>
  );
};
