import { FC } from "react";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

interface IDirectionPersonProps {
  name: string;
  job: string;
  image?: string;
  bgcolor?: any;
}

export const DirectionPerson: FC<IDirectionPersonProps> = ({ image, job, name, bgcolor }) => {
  return (
    <Card sx={{ bgcolor: '#E9E9E9', padding: 3 }}>
      <CardContent sx={{ display: 'flex', gap: 1 }}>
        {image ? <Avatar
          alt={name}
          src={image}
          sx={{ width: 100, height: 100, bgcolor: bgcolor }}
        /> :
          <Avatar
            alt={name}
            src={image}
            sx={{ width: 100, height: 100, color: 'white', bgcolor: bgcolor }}
          >
            {name.split('')[0]}
          </Avatar>
        }

        <Box>
          <Typography
            variant="h5"
            textAlign='justify'
            paddingBottom={1}
            sx={{
              minHeight: '3rem',
              maxHeight: '6rem',
            }}
          >
            {name}
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            textAlign='justify'
            sx={{
              minHeight: '3rem',
              maxHeight: '6rem',
            }}
          >
            {job}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
