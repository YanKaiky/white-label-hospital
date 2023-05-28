import { FC } from "react";
import { Box, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface IJobProps {
  title: string;
  description: string;
  url: string;
  location: string;
}

export const Job: FC<IJobProps> = ({ title, description, url, location }) => {
  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <ListItemButton>
        <Box display='flex' flexDirection='column' alignItems='flex-start'>
          <ListItemText primary={title} secondary={description} />
          <Box display='flex' alignItems='center'>
            <LocationOnIcon color="disabled" />
            <Typography variant="caption" sx={{ color: '#a4a4a4' }}>{location}</Typography>
          </Box>
        </Box>
      </ListItemButton>
    </Link>
  );
};
