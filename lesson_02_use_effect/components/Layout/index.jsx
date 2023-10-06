import React from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
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
