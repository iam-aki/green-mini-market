import * as React from "react";
import { Grid, Button, makeStyles, createStyles, ButtonGroup, Typography, Paper, Theme } from "@material-ui/core";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


const usetStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: "5vw 5vh",
            "& img": {
                height: "50vh !important",
                width: "50vh !important"
            }
        },
        button: {
            border: "none"
        },
        paper: {
            height: "4vh",
            padding: ".5",
            border: ".01em black solid",
            borderRadius: ".5em"
        }
    }));

interface IProps {
    count: number;
    weight?: string;
    decrease: () => any;
    increase: () => any;
}

export default function MulitCartButton(props: IProps) {
    const { count, weight } = props;
    const classes = usetStyles();
    return (
        <Grid container direction="row" spacing={6}>
            <Grid item >
                <Typography variant="caption" display="block" gutterBottom>
                    Quantity (per month)
                </Typography>
                <Paper className={`${classes.paper}`}>
                    <ButtonGroup>
                        <Button
                            aria-label="reduce"
                            className={`${classes.button}`}
                            onClick={() => props.decrease()}
                        >
                            <RemoveIcon fontSize="small" />
                        </Button>
                        <Typography variant="body2" align="center">{count}</Typography>
                        <Button
                            aria-label="increase"
                            className={`${classes.button}`}
                            onClick={() => props.increase()}
                        >
                            <AddIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>
                </Paper>
            </Grid>
            {weight ?
                <Grid item>
                    <Typography variant="caption" display="block" gutterBottom>
                        Size/Weight
                    </Typography>
                    <Paper className={`${classes.paper}`}>
                        {weight}
                    </Paper>
                </Grid>
                : <> </>
            }
        </Grid>
    );
}