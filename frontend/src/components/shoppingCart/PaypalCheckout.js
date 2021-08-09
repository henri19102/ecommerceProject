import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useOrders } from "../reducers/OrdersReducer";
import { useUsers } from "../reducers/UserReducer";
import orderService from "../../services/orders";
import { useCart } from "../reducers/CartReducer";

const PaypalCheckout = ({ totalPrice }) => {
  const { user } = useUsers();
  const order = useOrders();
  const userCart = useCart();

  if (!user) return null;
  if (!order) return null;

  const deleteAll = async () => {
    const all = order.orders
      .filter((x) => x.userId === user.id)
      .map((x) => x.id);
    await orderService.removeAllFromCart(all);
    order.dispatchOrders({ type: "deleteAll", payload: all });
    const allOrders = await orderService.getAll();
    order.dispatchOrders({ type: "getAll", payload: allOrders });
    userCart.dispatchCart({ type: "removeAll" });
  };
  return (
    <PayPalButton
      amount={totalPrice}
      currency='EUR'
      // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
      onApprove={(data, actions) => {
        // Capture the funds from the transaction
        return actions.order.capture().then(function (details) {
          // Show a success message to your buyer
          alert(`Kiitos ${details.payer.name.given_name}. Ostotapahtuma on suoritettu onnistuneesti`);
          deleteAll();
          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderID: data.orderID
            })
          });
        });
      }}
      options={{
        clientId:
          "AYuDdktFQzwYuen2d1hzMhzmhanBighmdCkKvgr7apF3dtI4QEEOJOxjy62JKLB8Lzbg6P4leW1sUlDw"
      }}
    />
  );
};

export default PaypalCheckout;
