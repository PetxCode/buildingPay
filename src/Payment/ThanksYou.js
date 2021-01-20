import { Button } from "antd";
import React from "react";
import { PayNow } from "./PayNow";
import { useHistory } from "react-router-dom";

const ThanksYou = ({ amount, email }) => {
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        fontSize: "50px",
        fontFamily: "Poppins",
        marginTop: "200px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      Thanks for supporting us....!
      <div>
        <Button
          style={{
            width: "300px",
            height: "50px",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={() => {
            history.push("/");
          }}
        >
          Go back
        </Button>
      </div>
    </div>
  );
};

export default ThanksYou;
