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
      image="https://lh3.googleusercontent.com/UdlCdpvkcyANoUecgtOe-xICWG5J3qqhhdagsoi8kwyRZqCrf_XNIUq0Ex2hexShDC7L1s2rmUCwmrcMIy4Vt60aAXI2vA0x_9jv-aHqbLxlb7X1sQN53-zvIoRtMRwOsjrNDMcINe8oXyR9KMYk8nz1lzawMQzwUz7i-f6z0EUCo9r0sm60frc8jPFA5DM9Ml7-fi7LOMsQi4af7WR8DTywp_XnEVnDORk2NlH_-wcM_quRM0FnDbRNCpK7TfTLbHij4hO6rQFGy47ttwtsAkncgfmpy8skq3P6AVsIPm0Lvkv2HrTiBy2dPV5i23hwmOIX8UqC-TcU6QzIAdhI_-toSmtfr3qR8uBfpdznJmpvLjfli4W5yY5HCow6bTm1UmlI5OOEoFr2BFyrwG-X3w_qEsMDWw1aU1WRUF5kwj-WIWLlAqPwa7GVkY0GjZTsashtPxiMnGqeSdembSsUyN8OLKLf659qLDB_f9h-nJWOXAVytD4rCjL0MCkel6jei0TMGHr1enwpf6J90NAUuLf-rwOzgftzyV7Glw9wM6B00QbDpc4aNO4DGra9spiCJLNvqyqfHmXAtvVcrohyxmcpj11PYrpExnx5v2DIRRLejjMwpZGEuuBfdr8_ARbDZcLQ_f4-quW2U7DoPM7XRweHddKMuD0ZjLlYmw2DrlefDQ0ag0gJfSmGW2DU=s256-no?authuser=0"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
