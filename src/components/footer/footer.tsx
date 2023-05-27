import { FC } from "react";
import { Typography } from "@mui/material";

export const Footer: FC = () => {
  return (
    <footer>
      <Typography variant="body2" color="textSecondary" textAlign='center'>
        &copy; {new Date().getFullYear()} Instituto Pequena Fênix. Todos os direitos reservados.
      </Typography>
    </footer>
  );
};
