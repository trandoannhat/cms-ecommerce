import React, { use } from "react";

import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  DashboardOutlined,
  ShoppingOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

type Props = {};

const AppSideBar = (props: Props) => {
  const navigate = useNavigate();

  const items = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: "Tổng quan",
    },
    {
      key: "products",
      icon: <ShoppingOutlined />,
      label: "Sản phẩm",
    },
  ];

  const handleNavigate = (e: any) => {
    // console.log(e);
    navigate(`/${e.key}`);
  };

  return (
    <Sider trigger={null} collapsible>
      <div className="text-xl font-bold text-blue-600 text-center py-5">
        QUẢN TRỊ
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
        className="h-[100vh]"
        onClick={handleNavigate}
      />
    </Sider>
  );
};

export default AppSideBar;
