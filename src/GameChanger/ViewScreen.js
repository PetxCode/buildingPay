import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";

const ViewScreen = () => {
  return (
    <div>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          color: "white",
          alignItems: "center",
          fontFamily: "Poppins",
          fontSize: "20px",
        }}
      >
        <div>All Users Entry</div>
        <Button>
          {" "}
          <Link
            to="/add"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Add Users{" "}
          </Link>
        </Button>
      </Header>
      <div
        style={{
          marginTop: "50px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
          width: "600px",
          height: "50px",
          border: "1px solid lightgray",
          alignItems: "center",
          padding: "10px 30px ",
          fontFamily: "Poppins",
        }}
      >
        <div>User Name</div>
        <div>
          <Button
            style={{
              backgroundColor: "green",
              marginRight: "20px",
              width: "90px",
              color: "white",
            }}
          >
            <Link to="/edit">Edit</Link>
          </Button>
          <Button
            style={{
              backgroundColor: "red",
              // marginRight: "20px",
              width: "90px",
              color: "white",
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewScreen;
