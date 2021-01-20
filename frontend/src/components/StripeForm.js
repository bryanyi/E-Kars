import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "../css/StripeForm.css";

const StripeForm = ({ getCartCount, getCartSubtotal }) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(async () => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch("/api/stripe/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderTotal: orderTotal() * 100 }),
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((err) => console.log(err));
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: e.target.name.value,
          email: e.target.email.value,
          address: {
            line1: e.target.address1.value,
            line2: e.target.address2.value,
            state: e.target.state.value,
            postal_code: e.target.zip.value,
          },
        },
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  const shippingTotal = () => {
    const subtotal = getCartSubtotal();
    const shipping = getCartSubtotal() * 0.08;
    return subtotal + shipping;
  };

  const orderTotal = () => {
    return shippingTotal() * 0.0725 + shippingTotal();
  };

  return (
    <div className="stripeform">
      <form id="payment-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          placeholder="Full name"
          name="name"
          required
          autoComplete="off"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          autoComplete="off"
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          placeholder="Address line 1"
          name="address1"
          required
          autoComplete="off"
        />

        <input
          type="text"
          placeholder="Address line 2"
          name="address2"
          autoComplete="off"
        />

        <input
          type="text"
          placeholder="State"
          name="state"
          required
          autoComplete="off"
        />

        <input
          type="text"
          placeholder="Zip Code"
          name="zip"
          required
          autoComplete="off"
        />

        <div className="order__summary">
          <div className="card__divider"></div>
          <div className="subtotal">
            <h6>Subtotal ({getCartCount()} items)</h6>
            <h6>${getCartSubtotal().toFixed(2)}</h6>
          </div>
          <div className="shipping">
            <h6>Shipping</h6>
            <h6>${shippingTotal()}</h6>
          </div>
          <div className="total">
            <h6>Total (tax included)</h6>
            <h6>${orderTotal()}</h6>
          </div>
        </div>

        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button
          className="payment__button"
          disabled={processing || disabled || succeeded}
          id="submit"
        >
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Place Order"
            )}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Order placed! Check your email for details.
        </p>
      </form>
    </div>
  );
};

export default StripeForm;
