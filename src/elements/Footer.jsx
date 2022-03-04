import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
    const theme = useTheme();
    return (
        <ButtonGroup variant="contained" aria-label="outlined secondary button group" fullWidth>
        <Button  sx={{  color: theme.palette.secondary.contrastText , bgcolor: theme.palette.secondary.main, '&:hover' : {
            color: theme.palette.secondary.contrastText , bgcolor: theme.palette.secondary.main
        }}}>GitHub</Button>
        <Button  sx={{  color: theme.palette.secondary.contrastText , bgcolor: theme.palette.secondary.main, '&:hover' : {
            color: theme.palette.secondary.contrastText , bgcolor: theme.palette.secondary.main
        }}}>LinkedIn</Button>
        <Button  sx={{  color: theme.palette.secondary.contrastText , bgcolor: theme.palette.secondary.main, '&:hover' : {
            color: theme.palette.secondary.contrastText , bgcolor: theme.palette.secondary.main
        }}}>YouTube</Button>
        </ButtonGroup>
    );
}
