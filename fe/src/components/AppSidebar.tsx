import React, { use, useContext } from "react";

import { Layout, Menu } from "antd";

import {
  CaretRightOutlined,
  DashboardOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
const { Sider } = Layout;

type Props = {};

const AppSideBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDark } = useContext(ThemeContext);

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
    {
      key: "category",
      icon: <CaretRightOutlined />,
      label: "Danh mục",
    },
    {
      key: "users",
      icon: <UserOutlined />,
      label: "Tài khoản",
    },
  ];

  const handleClick = (e: any) => {
    // console.log(e);
    navigate(`/${e.key}`);
  };
  // lấy key theo URL hiện tại
  const selectedKey = location.pathname.split("/")[1] || "dashboard";
  return (
    <Sider trigger={null} collapsible>
      <div className="text-xl font-bold text-blue-600 text-center py-5">
        QUẢN TRỊ
      </div>
      <Menu
        selectedKeys={[selectedKey]} // active đúng menu theo url
        theme={isDark ? "dark" : "light"}
        items={items}
        className="h-screen"
        onClick={handleClick}
      />
    </Sider>
  );
};

export default AppSideBar;
