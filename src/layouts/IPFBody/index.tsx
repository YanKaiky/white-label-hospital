import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

interface IIPFBodyProps {
  image: string;
  children: ReactNode;
}

export const IPFBody: FC<IIPFBodyProps> = ({ image, children }) => {
  return (
    <Box sx={{ background: '#FDFFD1' }}>
      <Header image={image} />
      {children}
      <Footer />
    </Box>
  );
};
