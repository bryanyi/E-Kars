const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.payment = async (req, res) => {
  const { orderTotal } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: orderTotal,
    currency: "usd",
    metadata: { integration_check: "accept_a_payment" },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};
