import * as React from 'react';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function MyFab() {
    return ( 
    <Fab variant="extended" fullWidth>
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
    </Fab>
    );
}