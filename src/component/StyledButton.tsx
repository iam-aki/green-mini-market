import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.spacing(5),
      border: 0,
      color: 'white',
      height: theme.spacing(6),
      padding: '0 30px',
      backgroundColor: theme.palette.primary.main,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      '&.MuiButton-root.Mui-disabled' :{
        backgroundColor : theme.palette.primary.light
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.light
      },
      width: theme.spacing(30),
    }

  }))(Button);

  export default StyledButton;