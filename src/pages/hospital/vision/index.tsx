import { FC, useState } from "react";
import { Collapse, ListItemButton, ListItemText, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const Vision: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          bgcolor: '#A900F3',
          ":hover": {
            bgcolor: '#A900F3'
          }
        }}
      >
        <ListItemText primary="Visão" primaryTypographyProps={{ style: { color: 'white' } }} />
        {open ? <ExpandLess sx={{ color: "white" }} /> : <ExpandMore sx={{ color: "white" }} />}
      </ListItemButton>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{
          bgcolor: 'white',
          borderBottom: '2px solid #A900F3',
          borderLeft: '2px solid #A900F3',
          borderRight: '2px solid #A900F3',
          padding: 2
        }}
      >
        <Typography textAlign='justify' fontWeight={300} fontSize={20}>
          Ser um hospital reconhecido pela excelência nos cuidados e apoio, se diferenciando com individualidade,
          contemplando a qualidade de vida e equipe de profissionais categóricos.
        </Typography>
      </Collapse>
    </>
  );
};
