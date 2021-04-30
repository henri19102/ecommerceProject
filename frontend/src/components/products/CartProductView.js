import React, {useEffect, useState} from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { useStyles } from "../../styles/styles";
import {useProducts} from '../reducers/ProductsReducer'
import {useUsers} from '../reducers/UserReducer'
import {useOrders} from '../reducers/OrdersReducer'
import {useCart} from '../reducers/CartReducer'
import orderService from '../../services/orders'


const CartProductView = ({product}) => {
  const classes = useStyles();
  const {products} = useProducts()
  const {user} = useUsers()
  const orders = useOrders()
  const userCart = useCart()


  // if (!orders.orders) return <div><p>loading...</p></div>
  // if (!products) return <div><p>loading...</p></div>
   if (!user) return <div><p>loading...</p></div>
  // if (!userCart.cartProducts) return <div><p>loading...</p></div>
  // if (!product) return <div><p>loading...</p></div>



const prods = products.find(x=>x.id === product.productId)

  const removeProductFromCart = async () => {



    const deleteObj = orders.orders.find(x => x.userId === user.id && x.productId === product.productId)
    console.log(orders.orders)
    console.log(deleteObj)
    const id = deleteObj.id
    await orderService.removeProductFromCart(id)
    orders.dispatchOrders({ type: "delete", deleteId: id })
    const userOrders = await orderService.getProductCount(user.id)
    userCart.dispatchCart({type: 'getAll', payload: userOrders})
}
  


  const addProductToCart = () => {
    
  }

  return (
    <Grid style={{ margin: "20px" }}>
      <Card className={classes.root2} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Product:
          </Typography>
          <Typography variant="h5" component="h2">
            {`${prods.name}`}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Price:
          </Typography>
          <Typography variant="body2" component="p">
            {`${prods.price} €  count: ${product.productCount}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={addProductToCart} color="primary" variant="contained" size="small">
            Add to Cart
          </Button>
          <Button onClick={removeProductFromCart} color="secondary" variant="contained" size="small">
            Remove from cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CartProductView;
