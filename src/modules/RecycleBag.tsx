import * as React from "react";
import { Grid, CardMedia, Container, makeStyles, createStyles, Theme, Box } from "@material-ui/core";
import { connect } from "react-redux";
import { IProduct } from "../store/actions/productTypes";
import { RouteComponentProps } from "react-router";
import { getRecycle } from "../store/actions/productActions";
import { IApplicationState } from "../store/Store";
import { CustomCircularProgress } from "../component/CustomCircularProgress";
import { addToCart, deleteFromCart } from "../store/actions/cartActions";
import { ICart } from "../store/actions/cartTypes";
import CartButton from "../component/CartButton";
import RupeeIcon from "../component/RupeeIcon";
import StyledPara from "../component/StyledPara";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      "& ul": {
        paddingLeft: theme.spacing(2)
      },
      "& ul li": {
        color: "#4C1D0B",
        lineHeight: theme.spacing(2),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      }
    }
  })
);

interface IProps extends RouteComponentProps {
  getRecycle: typeof getRecycle;
  loading: boolean;
  recycleProduct: IProduct[];
  addToCart: typeof addToCart;
  deleteFromCart: typeof deleteFromCart;
  cart: ICart[];
}

const mapStateToProps = (store: IApplicationState, props: IProps) => {
  return {
    loading: store.products.productsLoading,
    recycleProduct: store.products.recycleProduct,
    cart: store.cart.cart
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getRecycle: () => dispatch(getRecycle()),
    addToCart: (productId: string, product: IProduct) => dispatch(addToCart(productId, product)),
    deleteFromCart: (productId: string, product: IProduct) => dispatch(deleteFromCart(productId, product))
  };
};

export function RecycleBag(props: IProps) {
  const classes = useStyles();
  const [count, setCount] = React.useState(0);

  function addToCart(productId: string, product: IProduct) {
    props.addToCart(productId, product);
    // setCount(1);
  }

  function deleteFromCart(productId: string, product: IProduct) {
    props.deleteFromCart(productId, product);
    // setCount(0);
  }

  React.useEffect(() => {
    props.getRecycle();
  }, []
  )

  const recycleBag =
    props.loading ?
      props.recycleProduct.map(product =>
        <Grid container spacing={6} justify="space-around">
          <Grid item xs={12} md={7}>
            <StyledPara value={product.description} />
            <Box component="div" className={`${classes.list}`}>
              <ul>
                {null !== product.feature ? product.feature.map(feature => (
                  <li>
                    <StyledPara value={feature} />
                  </li>
                )) : ""}
              </ul>
            </Box>
            <h1>
              <RupeeIcon />
              {product.mrp}
            </h1>
            <CartButton
              add={() => addToCart(product.productId, product)}
              delete={() => deleteFromCart(product.productId, product)}
              count={count}
              mrp={product.mrp} />
          </Grid>
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              alt={product.name}
              image={product.image[0]}
              title={product.name}
            />
          </Grid>
        </Grid>)
      :
      <CustomCircularProgress />

  return (
    <Container maxWidth="lg">
      {recycleBag}
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RecycleBag);