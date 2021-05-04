import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../styles/styles";
import {useProducts} from '../reducers/ProductsReducer'
import {
    useParams,
  } from "react-router-dom";

const ProductDetailView = () => {
  const classes = useStyles();
  const {products} = useProducts()
  const {id} = useParams()

  if(!products)return null

  const product = products.find(x=>x.id === Number(id))

  return (
 <div>
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
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

          <Typography className={classes.pos} color="textSecondary">
            Price:
          </Typography>
          <Typography variant="body2" component="p">
            {`${product.price} €`}
          </Typography>
        <CardActions>
          <Button variant="contained" size="small">
            Add to Cart
          </Button>
        </CardActions>
        </div>
  );
};

export default ProductDetailView