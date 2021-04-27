import React, {useEffect} from "react";
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
import orderService from '../../services/orders'


const CartProductView = ({value}) => {
  const classes = useStyles();
  const {products} = useProducts()
  const {loggedUser} = useUsers()

const orders = useOrders()
  const product = products.find(x=>x.id === Number(value[0]) )


  
  const handleClick2 = async () => {
     const deleteObj = orders.orders.find(x => x.userId === loggedUser.id && x.productId === product.id)
     const id = deleteObj.id
     console.log(id)
     await orderService.removeProductFromCart(id)
     orders.dispatchOrders({ type: "delete", deleteId: id })
}
  


  const handleClick = () => {
    
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
            {`${product.name}`}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Price:
          </Typography>
          <Typography variant="body2" component="p">
            {`${product.price} €  count: ${value[1]}`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleClick} color="primary" variant="contained" size="small">
            Add to Cart
          </Button>
          <Button onClick={handleClick2} color="secondary" variant="contained" size="small">
            Remove from cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CartProductView;
