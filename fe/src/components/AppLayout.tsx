import { Layout } from "antd";
import React from "react";
import AppSideBar from "./AppSideBar";
import AppHeader from "./AppHeader";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

type Props = {};

const AppLayout = (props: Props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppSideBar />
      <Layout>
        <AppHeader />
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            borderRadius: 8,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
