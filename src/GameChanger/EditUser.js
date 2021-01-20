import { Button } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const EditUser = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  return (
    <div>
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "60px",
          fontFamily: "Poppins",
        }}
      >
        <input
          style={{
            width: "450px",
            height: "40px",
            padding: "5px 10px",
            marginBottom: "20px",
          }}
          placeholder="Edit User"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <div>
          <Button
            style={{
              backgroundColor: "green",
              marginRight: "20px",
              width: "90px",
              color: "white",
            }}
          >
            Edited
          </Button>
          <Button
            style={{
              backgroundColor: "red",
              // marginRight: "20px",
              width: "90px",
              color: "white",
            }}
            onClick={() => {
              history.push("/home");
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
