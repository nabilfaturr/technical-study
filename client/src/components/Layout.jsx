import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="max-w-7xl w-full h-[100vh]  flex items-center justify-center mx-auto p-2">
      <main className="flex flex-col items-center justify-center w-full">
        {children}
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
