import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useOrders} from "../reducers/OrdersReducer";
import { useUsers } from "../reducers/UserReducer";
import orderService from "../../services/orders";
import { useCart } from "../reducers/CartReducer";
import { useNotification } from "../reducers/NotificationReducer";




const CheckoutDialog = () => {
    const { user } = useUsers();
  const order = useOrders();
  const userCart = useCart();
  const message = useNotification();


  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!user) return null
  if (!order) return null

  const notificationMessage = (msg, isError) => {
    message.dispatchNotification({ type: "message", message: {message: msg, isError: isError} })
    setTimeout(()=>{
        message.dispatchNotification({ type: "clear"})
    }, 5000)
  }


const deleteAll = async () => {
    setOpen(false);
    const all = order.orders.filter(x=> x.userId === user.id).map(x => x.id)
    await orderService.removeAllFromCart(all)
    order.dispatchOrders({ type: "deleteAll", payload: all })
    const allOrders = await orderService.getAll()
    order.dispatchOrders({ type: "getAll", payload: allOrders });
    userCart.dispatchCart({type: "removeAll"})
    notificationMessage(`Items purchased succesfully!`, false)
  }

  return (
    <div style={{textAlign: "center"}}>
      <Button variant="contained" onClick={handleClickOpen}>
        Checkout
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Continue?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Purchase all items from shopping cart or cancel and continue shopping?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteAll} color="primary" autoFocus>
            Purchase
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CheckoutDialog