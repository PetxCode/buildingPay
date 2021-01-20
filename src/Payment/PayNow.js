import { Button } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";
import ThanksYou from "./ThanksYou";

export const PayNow = () => {
  const history = useHistory();
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");

  const onSuccess = (reference) => {
    history.push("/thanks");
    console.log(reference);
  };

  const onClose = () => {
    alert("having any issue?");
    console.log("closed");
  };

  const initializePayment = usePaystackPayment({
    reference: new Date().getTime(),
    email: email,
    amount: amount,
    publicKey: "pk_live_1b38eded7c4210daa7cf2270cebee0bf90de0252",

    // pk_live_1b38eded7c4210daa7cf2270cebee0bf90de0252   pk_test_f747091150685438ae86d5a98b5df3c60275f367
  });
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginBottom: "10px",
          }}
        >
          {" "}
          You are giving ₦{amount / 100}{" "}
        </div>
        <input
          placeholder="Enter your Email"
          style={{
            width: "300px",
            padding: "10px 10px",
            marginBottom: "10px",
          }}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="Amount"
          style={{
            width: "300px",
            padding: "10px 10px",
          }}
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>

      <Button
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        Pay Now
      </Button>
    </div>
  );
};
