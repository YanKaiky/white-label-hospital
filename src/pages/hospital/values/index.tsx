import { FC, useState } from "react";
import { Collapse, ListItemButton, ListItemText, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const Values: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          bgcolor: '#A900F3',
          ":hover": {
            bgcolor: '#A900F3'
          },
          borderRadius: ' 0 0 8px 8px'
        }}
      >
        <ListItemText primary="Valores" primaryTypographyProps={{ style: { color: 'white' } }} />
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
          borderRadius: '0 0 8px 8px',
          padding: 2
        }}
      >
        <Typography textAlign='justify' fontWeight={300} fontSize={20}>
          Proporcionar qualidade, humização e respeito ao paciente e familiares, com objetivo de criar vidas aos anos.
        </Typography>
      </Collapse>
    </>
  );
};
