import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { FC } from "react";

interface ICardAvatarProps {
  image: string;
  title: string;
  subtitle: string;
}

export const CardAvatar: FC<ICardAvatarProps> = ({ image, title, subtitle }) => {
  return (
    <Card sx={{ width: '100%', bgcolor: '#E9E9E9' }}>
      <CardHeader
        avatar={<Avatar alt={title} src={image} sx={{ width: 70, height: 70, }} />}
        title={title}
        titleTypographyProps={{ variant: "h6", component: "span" }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign='justify'
          sx={{
            minHeight: '3rem',
            maxHeight: '6rem',
          }}
        >
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};
