import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
const Layout = () => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
