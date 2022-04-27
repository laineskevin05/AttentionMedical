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
  const notificacionesOrdenadas = notificaciones.sort((a, b) => {
    return new Date(a.fecha) > new Date(b.fecha);
  });

  return (
    <div className="bg-menu w-1/5 inline-flex border border-gray-800 ">
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
          className="h-[90vh] overflow-y-auto overflow-x-hidden"
        >
          <List
            size="large"
            bordered
            dataSource={notificacionesOrdenadas}
            renderItem={(item) => (
              <List.Item>
                {
                  <div>
                    <b>{moment(item.fecha, "YYYYMMDD").fromNow()}</b> :{" "}
                    {item.mensaje}
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
