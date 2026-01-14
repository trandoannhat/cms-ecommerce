import { Avatar, Dropdown, Layout, Menu } from "antd";
import { BulbOutlined, MoonOutlined, UserOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const { Header } = Layout;
type Props = {};

const AppHeader = (props: Props) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const menu = (
    <Menu
      items={[
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
      ]}
    ></Menu>
  );

  return (
    <>
      <Header className="flex justify-between items-center px-6 shadow-sm">
        {/* chỉnh như vậy là sang phải , chỉ cần khối div rỗng */}
        <div />
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-lg cursor-pointer hover:text-blue-500 transition-colors"
          >
            {isDark ? <BulbOutlined /> : <MoonOutlined />}
          </button>

          <Dropdown overlay={menu} placement="bottomRight">
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
