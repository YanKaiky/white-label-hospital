import { News } from "../../components/news/news";
import { IPFBody } from "../../layouts/IPFBody";
import headerImage from "../../assets/home.png";
import { Specialties } from "../../components/specialties/specialties";

export const Home = () => {
  return (
    <IPFBody image={headerImage}>
      <Specialties />

      <News />
    </IPFBody>
  );
};
