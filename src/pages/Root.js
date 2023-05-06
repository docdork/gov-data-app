import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";
import classes from "./Root.module.css";

function RootLayout() {
  return (
    <>
      <div className={classes.content}>
        <MainNavigation />
        <main>
          <Outlet />
        </main>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;

<body>
  <div class="content">
    <div class="content-inside">content</div>
  </div>
  <footer class="footer"></footer>
</body>;
