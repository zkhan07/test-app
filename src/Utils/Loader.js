import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';


export const Loader = () => {
    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      style={{padding:'230px 0px'}}
      >
            <CircularProgress disableShrink />
       </Grid> 
    )
}
