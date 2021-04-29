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


const CartProductView = ({product}) => {
  const classes = useStyles();
  const {products} = useProducts()
  const {user} = useUsers()
  const {orders} = useOrders()

  if (!orders) return null
  if (!products) return null

  
  console.log(products)

console.log(product)

const prods = products.find(x=>x.id === product.productId)
  
  const handleClick2 =  () => {

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
