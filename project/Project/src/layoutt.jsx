import { v4 as uuidv4 } from 'uuid';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      

      <Outlet />
    </>
  )
};

export default Layout;