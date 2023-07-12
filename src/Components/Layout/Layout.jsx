import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Provider } from "react-redux";
import store from "../../store/store";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <Provider store={store}>
      <div>
        <NavigationBar />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

export default Layout;
