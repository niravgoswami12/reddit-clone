import Navbar from "../Navbar/Navbar";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
