import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";

const ShippingDetails = ({ user }) => {
  return (
    <List component='nav' aria-label='main mailbox folders'>
      <ListItem>
        <ListItemIcon>
          <BusinessRoundedIcon />
        </ListItemIcon>
        <ListItemText primary={user.name? user.name : "Missing"} secondary={"Full Name"}  />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <LocationOnRoundedIcon />
        </ListItemIcon>
        <ListItemText primary={user.address? user.address : "Missing"} secondary={"Shipping Address"} />
      </ListItem>
      <ListItem button component='a' href={user.email? `mailto:${user.email}` : "#"}>
        <ListItemIcon>
          <EmailRoundedIcon />
        </ListItemIcon>
        <ListItemText primary={user.email? user.email: "Missing"} secondary={"E-mail"}/>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <PhoneRoundedIcon />
        </ListItemIcon>
        <ListItemText primary={user.phonenumber? user.phonenumber: "Missing"} secondary={"Phone Number"} />
      </ListItem>
    </List>
  );
};
export default ShippingDetails;
