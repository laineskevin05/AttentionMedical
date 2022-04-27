import React, { useEffect } from "react";
import { Menu, List } from "antd";
import { starCitaLoaded } from "../../actions/cita";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/es";

const { SubMenu } = Menu;

const MenuUsuarioIzquierdo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(starCitaLoaded());
  }, []);

  useEffect(() => {
    dispatch(starCitaLoaded());
  }, [dispatch]);

  const { citas } = useSelector((state) => state.cita);
  const citasActivas = citas
    .filter((cita) => {
      return cita.estado === "Activo" && new Date(cita.fecha) > new Date();
    })
    .sort(function (a, b) {
      return new Date(a.fecha) > new Date(b.fecha);
    });
  console.log(citasActivas);

  return (
    <div className="bg-menu  w-1/5 inline-flex border border-gray-800 ">
      <Menu
        className="w-full"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          // icon={<NotificationOutlined />}
          title="Eventos"
          className="h-[90vh] overflow-y-auto overflow-x-hidden"
        >
          <List
            size="large"
            bordered
            dataSource={citasActivas}
            renderItem={(item) => (
              <List.Item>
                {
                  <div>
                    <b>{moment(item.fecha, "YYYYMMDD").fromNow()}</b> : Cita en{" "}
                    {item.nombreClinica} con el Dr. {item.nombreDoctor}
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

export default MenuUsuarioIzquierdo;
