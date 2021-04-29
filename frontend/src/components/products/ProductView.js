import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { useStyles } from "../../styles/styles";
import {useOrders} from '../reducers/OrdersReducer'
import orderService from '../../services/orders'
import {useUsers} from '../reducers/UserReducer'

const ProductView = ({ product }) => {
  const classes = useStyles();
  const order = useOrders()
  const {user} = useUsers()

  if (!order || !user) return null

  const handleClick = async () => {
    try {
      const createOrder = await orderService.addToCart(product.id, user.id)
      order.dispatchOrders({type: 'add', payload: createOrder})

    } catch (e){
      console.log(e)
    }
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
            {`${product.price} €`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleClick} variant="contained" size="small">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductView;
