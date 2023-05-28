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
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const xsDown = useMediaQuery(theme.breakpoints.down('xs'));
  const xlDown = useMediaQuery(theme.breakpoints.down('xl'));

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
            fontSize={(smDown && mdDown && lgDown && xlDown && !xsDown) ? 16 : undefined}
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
            fontSize={(smDown && mdDown && lgDown && xlDown && !xsDown) ? 16 : undefined}
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
