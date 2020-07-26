import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51H8p0iI9Wogz2blDDYNVXyrjZnOw7sfus1T4ioVHcupMz6OAqJy1OVU3aW3KQVvzze5mclhdW1ixWqjc2yxGKkdm00jr2yn6rs";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Kings Shop"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/vvjhN9T/crown-2.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
