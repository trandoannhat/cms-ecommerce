import React from "react";

import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

type Props = {};

const AppSideBar = (props: Props) => {
  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    UserOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));

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
      />
    </Sider>
  );
};

export default AppSideBar;
