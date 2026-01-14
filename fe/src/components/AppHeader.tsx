import { Avatar, Dropdown, Layout, Menu } from "antd";
import { MoonOutlined, UserOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";

const { Header } = Layout;
type Props = {};

const AppHeader = (props: Props) => {
  const menuItems: MenuProps["items"] = [
    {
      key: "profile",
      label: "Thông tin",
    },
    {
      key: "setting",
      label: "Cài đặt",
    },
    {
      key: "logout",
      label: "Đăng xuất",
    },
  ];

  return (
    <>
      <Header className="flex justify-between items-center px-6 shadow-sm">
        {/* chỉnh như vậy là sang phải , chỉ cần khối div rỗng */}
        <div />
        <div className="flex items-center gap-4">
          <button className="text-lg cursor-pointer hover:text-blue-500 transition-colors">
            <MoonOutlined />
          </button>

          <Dropdown menu={{ items: menuItems }} placement="bottomRight">
            <Avatar
              size="large"
              icon={<UserOutlined />}
              className="cursor-pointer"
            ></Avatar>
          </Dropdown>
        </div>
      </Header>
    </>
  );
};

export default AppHeader;
