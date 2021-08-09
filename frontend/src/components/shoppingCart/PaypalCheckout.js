import React from "react";
import Button from "@material-ui/core/Button";

const PaypalCheckout = () => {
  return (
    <div style={{ textAlign: "center" }}>
      Pay with
      <Button id={"paypalBtn"} variant='contained'>Paypal</Button>
    </div>
  );
};

export default PaypalCheckout;
