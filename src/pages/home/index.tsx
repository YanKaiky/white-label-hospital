import { News } from "../../components/news/news";
import { Content } from "../../components/content/content";
import { IPFBody } from "../../layouts/IPFBody";
import headerImage from "../../assets/home.png";

export const Home = () => {
  return (
    <IPFBody image={headerImage}>
      <Content />

      <News />
    </IPFBody>
  );
};