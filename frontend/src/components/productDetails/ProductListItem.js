import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../../styles/styles";
import { useUsers } from "../reducers/UserReducer";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const ProductListItem = ({ review }) => {
  const classes = useStyles();
  const { user } = useUsers();
  if (!user) return null;
  return (
    <>
      <ListItem key={review.id}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" />
        </ListItemAvatar>
        <ListItemText
          primary={`${user.name}`}
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" color="textPrimary">
                {review.reviewText}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ProductListItem;
