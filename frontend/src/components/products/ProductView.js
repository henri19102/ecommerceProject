import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { useStyles } from "../../styles/styles";
import { useOrders } from "../reducers/OrdersReducer";
import orderService from "../../services/orders";
import { useUsers } from "../reducers/UserReducer";
import { useCart } from "../reducers/CartReducer";
import {useRatings} from '../reducers/RatingsReducer'
import {useNotification} from '../reducers/NotificationReducer'
import ratingService from '../../services/ratings'
import Rating from '@material-ui/lab/Rating';
import {
  useHistory
} from "react-router-dom";

const ProductView = ({ product }) => {
  const classes = useStyles();
  const order = useOrders();
  const userCart = useCart();
  const { user } = useUsers();
  const ratings = useRatings()
 
  const history = useHistory()
  const message = useNotification()

  const notificationMessage = (msg, isError) => {
    message.dispatchNotification({ type: "message", message: {message: msg, isError: isError} })
    setTimeout(()=>{
        message.dispatchNotification({ type: "clear"})
    }, 5000)
  }

  if(!ratings.ratings)return null
  let joku

  const addToUserCart = async () => {
    if (user){
      const createOrder = await orderService.addToCart(product.id, user.id);
      order.dispatchOrders({ type: "add", payload: createOrder });
      const userOrders = await orderService.getProductCount(user.id);
      userCart.dispatchCart({ type: "getAll", payload: userOrders });
    }
  };
  if(ratings.ratings.find(x=>x.productId === product.id)){
    const filteredRatings = ratings.ratings.filter(x=>x.productId === product.id)
    const average = filteredRatings.map(x=> x = x.starRating)
    joku = average.reduce((a, b) => (a + b)) / average.length
  }


 const submitRating = async (userId, productId, starRating) => {
  if (ratings.ratings.find(x=> x.userId === userId && x.productId === productId)){
    return notificationMessage('You have already rated this product!',true)
  }
  const newRating = await ratingService.addRating(userId, productId, starRating)
  ratings.dispatchRatings({type: "add", payload: newRating})
  notificationMessage('Product rated succesfully!',false)
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
          <Button size='large' variant="contained" onClick={() => history.push(`products/${product.id}`)}  >
          {`${product.name}`}
          </Button>
            
          <Typography className={classes.pos} color="textSecondary">
            Price:
          </Typography>
          <Typography variant="body2" component="p">
            {`${product.price} €`}
          </Typography>


          <Rating 
          value={joku || 0} 
          name="unique-rating"
          onChange={(event, newValue) => {
            submitRating(user.id, product.id, newValue);
          }}
          >

          </Rating>


        </CardContent>
        <CardActions>
          <Button onClick={addToUserCart} variant="contained" size="small" color='primary' >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductView;
