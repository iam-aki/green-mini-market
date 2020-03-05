import * as React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  Grid,
  Theme,
  IconButton,
  Badge
} from "@material-ui/core";
import { NavLink, RouteComponentProps } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { ICart } from "../store/actions/cartTypes";
import { IApplicationState } from "../store/Store";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: "#e1bb80",
    paddingTop: "5vh",
    "& a": {
      color: "#4c1d0b",
      marginLeft: "1rem",
      marginRight: "1rem",
    },
  },
  divider: {
    height: 40
  },
  secondrow: {
    paddingBottom: theme.spacing(2)
  }
})
);

function Header() {
  const classes = useStyles();

  const [invisible, setInvisible] = React.useState(true);

  return (
    <Grid container className={`${classes.root}`}>
      <Grid container justify="flex-end" className={classes.secondrow}>
        <NavLink to="/cart">
          <Badge color="secondary" variant="dot" invisible={invisible}>
            <IconButton aria-label="Go to shopping cart">
              <ShoppingCartIcon />
            </IconButton>
          </Badge>
          CART
        </NavLink>
        <NavLink to="/home">
          Product Page
        </NavLink>
      </Grid>
    </Grid>
  );
};



interface IProps extends RouteComponentProps {
  cart: ICart[]
}

const mapStateToProps = (store: IApplicationState) => {
  return {
    cart: store.cart.cart
  };
};


function Basket(props: IProps) {

  const [count, setCount] = React.useState(0);

  React.useEffect(() =>
    setCount(getTotalCount())
  )

  function getTotalCount(): number {
    let counter: number = 0;
    if (props && props.cart) {
      props.cart.map(item => {
        counter = counter + item.count
      }
      )
    }
    console.log(counter);
    return counter;
  }

  return (
    <>{count} </>
  );
}
const basketCount = connect(mapStateToProps)(Basket);



export default Header;