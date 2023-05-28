import { FC } from "react";
import { Avatar, Box, Card, CardContent, Typography, useMediaQuery, useTheme } from "@mui/material";

interface IDirectionPersonProps {
  name: string;
  job: string;
  image?: string;
  bgcolor?: any;
}

export const DirectionPerson: FC<IDirectionPersonProps> = ({ image, job, name, bgcolor }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const xlDown = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <Card sx={{ bgcolor: '#E9E9E9', padding: 3 }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {image ? <Avatar
          alt={name}
          src={image}
          sx={{
            width: smDown ? 70 : 100,
            height: smDown ? 70 : 100,
            bgcolor: bgcolor
          }}
        /> :
          <Avatar
            alt={name}
            src={image}
            sx={{
              width: smDown ? 70 : 100,
              height: smDown ? 70 : 100,
              color: 'white',
              bgcolor: bgcolor
            }}
          >
            {name.split('')[0]}
          </Avatar>
        }

        <Box display='flex' flexDirection='column' alignItems='flex-start' justifyContent='center'>
          <Typography
            variant="h5"
            textAlign='justify'
            paddingBottom={1}
            fontSize={smDown ? 12 : xlDown && lgDown ? 20 : undefined}
          >
            {name}
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            textAlign='justify'
            fontSize={smDown ? 12 : xlDown && lgDown ? 18 : undefined}
          >
            {job}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
