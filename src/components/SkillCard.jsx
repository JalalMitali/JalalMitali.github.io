import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Favorite from '@mui/icons-material/Favorite';

export default function SkillCard(props) {
  const theme = useTheme();

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="JALAL" src='logo.svg' />
        }
        action={
          <IconButton aria-label="Made With Love">
            <Favorite sx={{  color: theme.palette.secondary.main }}/>
          </IconButton>
        }
        title={props.header}
        subheader={props.subHeader}
      />
      <CardMedia
        component="img"
        height="300"
        image={props.imgSrc}
        alt={props.imgAlt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {props.data}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link href={props.link} target="_blank" underline="none" sx={{ width: '100%', color: theme.palette.primary.contrastText , bgcolor: theme.palette.primary.main, '&:hover' : {
                color: theme.palette.secondary.contrastText , bgcolor: theme.palette.secondary.main
              }}}>
            <Button fullWidth sx={{ color: theme.palette.primary.contrastText , bgcolor: theme.palette.primary.main, '&:hover' : {
                color: theme.palette.secondary.contrastText , bgcolor: theme.palette.secondary.main
              }}}>
              GITHUB SAMPLE
            </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
