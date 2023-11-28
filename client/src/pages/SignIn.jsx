import Layout from "../components/Layout";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const SignIn = ({ handleSetUsername }) => {
  const [signInForm, setSignInForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    console.log(signInForm);
  }, [signInForm]);

  return (
    <Layout>
      <Form
        type="Sign In"
        form={signInForm}
        handleFormChange={setSignInForm}
        handleSetUsername={handleSetUsername}
      />
    </Layout>
  );
};

SignIn.propTypes = {
  handleSetUsername: PropTypes.func.isRequired,
};

export default SignIn;
