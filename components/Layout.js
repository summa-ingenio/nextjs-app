// components/Layout.js
import React from "react";
import { Container, Header } from "../styles/LayoutStyles";

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
