import DesignedBy from "./Designer";
import Navbar from "./navbar";
const Layout = ({ children }) => (
  <div
    className="flex flex-col justify-center w-full overflow-hidden bg-Azure"
    id="content"
  >
    <Navbar />
    {children}
    <DesignedBy />
  </div>
);

export default Layout;
