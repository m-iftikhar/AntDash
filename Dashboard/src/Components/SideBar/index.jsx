import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const items = [
  {
    label: "Dashboard",
    key: "/",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Inventory",
    key: "/inventory",
    icon: <ShopOutlined />,
  },
  {
    label: "Orders",
    key: "/orders",
    icon: <ShoppingCartOutlined />,
  },
  {
    label: "Customers",
    key: "/customers",
    icon: <UserOutlined />,
  },
];

const Sidebar = () => {
   const navigate = useNavigate();
  return (
    <div className="Sidebar ">
      {/* Pass items as a prop */}
      <Menu className="SideMenuVertical" items={items} onClick={(item) => {
          //item.key
          navigate(item.key);
        }} />
    </div>
  );
};

export default Sidebar;
