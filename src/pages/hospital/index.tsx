import { Content } from "../../components/content/content";
import { IPFBody } from "../../layouts/IPFBody";
import { LogoHospital } from "../../components/logo.hospital/logo.hospital";
import { Opinions } from "../../components/opinions/opinions";
import headerImage from "../../assets/hospital.jpg";

export const Hospital = () => {
  return (
    <IPFBody image={headerImage}>
      <LogoHospital />

      <Content />

      <Opinions />
    </IPFBody>
  );
};
