import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Home = ({ username, handleSetUsername }) => {
  return (
    <Layout>
      <span>
        {username ? (
          <>
            <p className="text-4xl font-semibold mb-3">Hello {username}</p>
            <p>
              Click{" "}
              <button
                onClick={() => {
                  handleSetUsername("");
                }}
                className="text-blue-700"
              >
                here
              </button>{" "}
              to sign out
            </p>
          </>
        ) : (
          <span>
            <p className="text-4xl font-semibold mb-3">
              Sorry, we dont know you
            </p>
            <span className="flex justify-between">
              <p>
                Click{" "}
                <Link to={"/sign-in"} className="text-blue-500 text-lg">
                  here
                </Link>{" "}
                for Sign In
              </p>
              <p>
                Click{" "}
                <Link to={"/sign-up"} className="text-red-500 text-lg">
                  here
                </Link>{" "}
                for Sign Up
              </p>
            </span>
          </span>
        )}
      </span>
    </Layout>
  );
};

Home.propTypes = {
  username: PropTypes.string.isRequired,
  handleSetUsername: PropTypes.func.isRequired,
};

export default Home;
