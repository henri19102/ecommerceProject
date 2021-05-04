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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useHistory
} from "react-router-dom";

const ProductView = ({ product }) => {
  const classes = useStyles();
  const order = useOrders();
  const userCart = useCart();
  const { user } = useUsers();
 
  const history = useHistory()

  const addToUserCart = async () => {
    const createOrder = await orderService.addToCart(product.id, user.id);
    console.log(createOrder);
    order.dispatchOrders({ type: "add", payload: createOrder });
    const userOrders = await orderService.getProductCount(user.id);
    console.log(userOrders);
    userCart.dispatchCart({ type: "getAll", payload: userOrders });
  };

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
