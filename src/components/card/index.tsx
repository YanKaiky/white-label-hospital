import { Button, Card, CardActions, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";

interface IIPCCardProps {
  image: string;
  url: string;
  title: string;
  subtitle: string;
  linkText: string;
}

export const IPCCard: FC<IIPCCardProps> = ({ image, url, title, subtitle, linkText }) => {
  const theme = useTheme();
  const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const xlDown = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <Card sx={{ width: '75%', bgcolor: '#FDFFD1' }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            fontSize={xlDown && lgDown ? 15 : undefined}
            component="div"
            textAlign='justify'
            sx={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign='justify'
            sx={{
              maxHeight: '1rem',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {subtitle}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={url} target="_blank" rel="noopener noreferrer">
            <Button sx={{ color: 'grey' }} size="small">{linkText}</Button>
          </Link>
        </CardActions>
      </Card>
    </Link>
  );
};
