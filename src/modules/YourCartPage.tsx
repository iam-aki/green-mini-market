import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ICart } from '../store/actions/cartTypes';
import { IApplicationState } from '../store/Store';
import { Grid, Typography, CardMedia, makeStyles, Theme, createStyles, Button, Divider, Box } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { addToCart, removeFromCart, deleteFromCart } from '../store/actions/cartActions';
import { IProduct } from '../store/actions/productTypes';
import MulitCartButton from '../component/MultiCartButton';
import RupeeIcon from '../component/RupeeIcon';
import StyledButton from '../component/StyledButton';

const usetStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: "2em",
            "& img": {
                height: "25vh !important",
                width: "25vh !important"
            },
        },
        Grid : {
            padding: "1em"
        },
        outer: {
            padding: "2em"
        },
        button: {
            border: "none"
        },
        divider: {
            marginTop: "5vh",
            marginBottom: "5vh"
        }
    }));

interface IProps extends RouteComponentProps {
    addToCart: typeof addToCart;
    removeFromCart: typeof removeFromCart;
    deleteFromCart: typeof deleteFromCart;
    cart: ICart[];
}

function YourCartPage(props: IProps) {

    const classes = usetStyles();
    const [count, setCount] = React.useState(0);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        getTotal()
    });

    function getTotal() {
        let temp = 0;
        if (props.cart) {
            props.cart.map(item => {
                temp = temp + (item.count * item.product.mrp);
            });
        }
        setTotal(temp);
    }

    function addToCart(productId: string, product: IProduct) {
        props.addToCart(productId, product);
        setCount(count + 1);
    }

    function removeFromCart(productId: string, product: IProduct) {
        props.removeFromCart(productId, product);
        setCount(count - 1);
    }

    function deleteFromCart(productId: string, product: IProduct) {
        props.deleteFromCart(productId, product);
        setCount(0);
    }

    function getCount(productId: string): number {
        let itemExists = props.cart.find(item => item.productId === productId);
        if (itemExists) {
            return itemExists.count;
        }
        else
            return 0;
    }

    const repeatingTile =
        props.cart.map(item =>
            <Grid container className={`${classes.Grid}`} direction="row" justify="space-evenly" >
                <Grid item xs={10} md={2}>
                    <CardMedia
                        component="img"
                        alt={item.product.name}
                        height="50"
                        image={item.product.image[0]}
                        title={item.product.name}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6">{item.product.name}</Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Typography variant="subtitle2">{item.product.weight}</Typography>
                </Grid>
                <Grid item xs={10} md={2}
                    direction="column"
                    justify="flex-start"
                    alignItems="center">
                    <MulitCartButton
                        count={getCount(item.product.productId)}
                        increase={() => addToCart(item.product.productId, item.product)}
                        decrease={() => removeFromCart(item.product.productId, item.product)}
                    />
                    <Grid item>
                        <Button
                            aria-label="reduce"
                            className={`${classes.button}`}
                            onClick={e => {
                                e.preventDefault()
                                deleteFromCart(item.product.productId, item.product)
                            }
                            }
                        >
                            <DeleteOutlineIcon fontSize="small" /> {"Remove"}
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={2} justify="center">
                    <Typography variant="subtitle2">
                        <RupeeIcon />
                        {item.product.mrp}
                    </Typography>
                </Grid>
            </Grid>
        )


    return (
        <>
            {props.cart.length > 0 ?
                <Grid className={`${classes.root}`}>
                    {repeatingTile}
                    <Grid container className={`${classes.outer}`} direction="column">
                        <Grid item>
                            <Typography variant="h6">{"Have you added your recycle bag?"}</Typography>
                        </Grid>
                        <Divider className={`${classes.divider}`} variant="fullWidth" />
                        <Grid container item direction="row" justify="space-between">
                            <Grid item>
                                <Typography component="div">
                                    <Box fontWeight="fontWeightMedium" m={1}>
                                        Subtotal
                                    </Box>
                                    <Box fontWeight="fontWeightLight" m={1}>
                                        Inclusive of GST and Delivery charges
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography component="div">
                                    <Box fontWeight="fontWeightBold" fontSize="h6.fontSize" >
                                        <RupeeIcon />{total}
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container direction="column" alignItems="flex-end" justify="center">
                        <Grid item>
                            <StyledButton >CHECK OUT</StyledButton>
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid container justify="center">
                    <Typography variant="h6">{"Cart is empty !!"}</Typography>
                </Grid>
            }
        </>
    )
}

const mapStateToProps = (store: IApplicationState, ownProps: IProps) => {
    return {
        cart: store.cart.cart
    };
};

const mapDispatchToProps = (dispatch: any, ownprops: IProps) => {
    return {
        addToCart: (productId: string, product: IProduct) => dispatch(addToCart(productId, product)),
        removeFromCart: (productId: string, product: IProduct) => dispatch(removeFromCart(productId, product)),
        deleteFromCart: (productId: string, product: IProduct) => dispatch(deleteFromCart(productId, product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(YourCartPage);