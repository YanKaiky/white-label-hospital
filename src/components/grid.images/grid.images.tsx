import { FC } from "react";
import { Box } from "@mui/material";

export const GridImage: FC = () => {
  return (
    <Box display='flex' justifyContent='space-evenly' alignItems='center'>
      <img src="https://i.pinimg.com/736x/80/f8/7d/80f87da58b4aa37bf32abb14fa77f42e.jpg" alt="Imagem 1" style={{ width: "20%" }} />
      <img src="https://i.pinimg.com/736x/80/f8/7d/80f87da58b4aa37bf32abb14fa77f42e.jpg" alt="Imagem 1" style={{ width: "20%" }} />
      <img src="https://i.pinimg.com/736x/80/f8/7d/80f87da58b4aa37bf32abb14fa77f42e.jpg" alt="Imagem 1" style={{ width: "20%" }} />
    </Box>
  );
};
