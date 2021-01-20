import { Layout } from "antd";
import React from "react";
import HeaderComp from "./HeaderComp";
const { Header, Footer, Sider, Content } = Layout;

const TheScreen = () => {
  return (
    <>
      <Layout>
        <Sider
          style={{
            backgroundColor: "red",
          }}
        >
          Sider
        </Sider>
        <Layout>
          <Header
            style={{
              // backgroundColor: "yellow",
              color: "white",
              fontFamily: "Poppins",
            }}
          >
            <HeaderComp />
          </Header>
          <Content>Content</Content>
          <Footer
            style={{
              backgroundColor: "blue",
            }}
          >
            Footer
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default TheScreen;
