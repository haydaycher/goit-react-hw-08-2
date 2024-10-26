import { Outlet } from "react-router-dom/dist";
import AppBar from "../AppBar/AppBar";
import PropTypes from "prop-types";

import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
      <Outlet />
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
