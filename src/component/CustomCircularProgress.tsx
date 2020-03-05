import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

export function CustomCircularProgress() {
    return (
        <Grid container justify="center">
            <CircularProgress />
        </Grid>
    )
}