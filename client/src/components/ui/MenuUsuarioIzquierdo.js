import React from "react";
import { Menu } from "antd";
const { SubMenu } = Menu;

const MenuUsuarioIzquierdo = () => {
  return (
    <div className="bg-menu  w-1/5 inline-flex border border-gray-800 ">
      <Menu
        className="w-full"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu key="sub1" title="Menu Izquierdo">
          <Menu.Item key="1">...</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default MenuUsuarioIzquierdo;
