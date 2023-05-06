import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import classes from "./Root.module.css";

function RootLayout() {
  return (
    <>
      <div className={classes.header}>
        <MainNavigation />
      </div>
      <main>
        <Outlet />
      </main>
      <div className={classes.footer}>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
