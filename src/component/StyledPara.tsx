import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        lineHeight: theme.spacing(3),
        color: "#101726",
        textAlign: "justify",
        letterSpacing: theme.spacing(0)
    },
}));

interface IProps {
    value: string;
}

const StyledPara = ({ value }: IProps) => {
    const classes = useStyles();
    return <Typography className={`${classes.root}`}> {value} </Typography>;
};

export default StyledPara;