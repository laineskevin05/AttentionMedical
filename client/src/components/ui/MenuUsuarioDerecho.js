import React, { useEffect } from "react";
import { Menu, List } from "antd";
import { NotificationOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { starNotificacionesLoad } from "../../actions/notificaciones";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const { SubMenu } = Menu;

const MenuUsuarioDerecho = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(starNotificacionesLoad());
  }, [dispatch]);

  const { notificaciones } = useSelector((state) => state.notificaciones);

  return (
    <div className="bg-menu w-1/5 border border-gray-800 inline-flex">
      <Menu
        className="w-full"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          icon={<NotificationOutlined />}
          title="Notificiaciones"
        >
          <List
            size="large"
            bordered
            dataSource={notificaciones}
            renderItem={(item) => (
              <List.Item>
                {
                  <div>
                    <b>{item.fecha}</b> : {item.mensaje}
                  </div>
                }
              </List.Item>
            )}
          />
        </SubMenu>
      </Menu>
    </div>
  );
};

export default MenuUsuarioDerecho;
