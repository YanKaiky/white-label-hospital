import { Content } from "../../components/content/content";
import { IPFBody } from "../../layouts/IPFBody";
import headerImage from "../../assets/hospital.jpg";

export const Hospital = () => {
  return (
    <IPFBody image={headerImage}>
      <Content />
    </IPFBody>
  );
};
