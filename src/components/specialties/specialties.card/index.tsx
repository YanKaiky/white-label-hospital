import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface ISpceialtyCardProps {
  image: string;
  title: string;
  url?: string;
  onClick?: (e: any) => void;
}

export const SpceialtyCard: FC<ISpceialtyCardProps> = ({ image, title, url, onClick }) => {
  return (
    <Box textAlign='center' marginTop={4}>
      <img width='20%' src={image} alt={title} />

      <Typography variant="h6" gutterBottom sx={{ color: '#002C55' }}>{title}</Typography>

      {url ? <Link to={url} target="_blank" rel="noopener noreferrer">
        <Button
          variant="contained"
          sx={{
            bgcolor: '#00B65B',
            ":hover": {
              bgcolor: '#41FFA0'
            }
          }}
        >
          Saiba mais
        </Button>
      </Link> :
        <Button
          onClick={onClick}
          variant="contained"
          sx={{
            bgcolor: '#00B65B',
            ":hover": {
              bgcolor: '#41FFA0'
            }
          }}
        >
          Saiba mais
        </Button>}
    </Box>
  );
};
