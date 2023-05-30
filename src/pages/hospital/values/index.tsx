import { FC, useState } from "react";
import { Collapse, ListItemButton, ListItemText, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const Values: FC = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          bgcolor: '#A900F3',
          ":hover": {
            bgcolor: '#A900F3'
          },
          borderRadius: !open ? '0 0 8px 8px' : undefined
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
          Respeito, Inovação, Empatia e Humanização.
        </Typography>
      </Collapse>
    </>
  );
};
