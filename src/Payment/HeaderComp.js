import React from "react";
import {
  PlusCircleOutlined,
  PlusCircleFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PlusCircleFilled
            style={{
              fontSize: "30px",
              marginRight: "10px",
              color: "#59BEA1",
            }}
          />
          <div
            style={{
              width: "400px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          >
            <input
              style={{
                width: "100%",
                height: "40px",
                padding: "0 20px",
                backgroundColor: "transparent",
                outlineWidth: "0",
                border: "none",
              }}
              placeholder="Search"
            />
            <SearchOutlined
              style={{
                fontSize: "30px",
                marginRight: "10px",
                color: "#001529",
              }}
            />
          </div>
        </div>
        <div>
          <Button>
            <Link to="/paynow"> Donate</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComp;
