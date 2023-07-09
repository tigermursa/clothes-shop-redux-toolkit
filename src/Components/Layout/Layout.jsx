import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Provider } from "react-redux";
import store from "../../store/store";
import Cart from "../Cart/Cart";

const Layout = () => {
  return (
    <Provider store={store}>
      <div>
        <NavigationBar />
        <Outlet />
      </div>
    </Provider>
  );
};

export default Layout;
