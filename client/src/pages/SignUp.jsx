import Form from "../components/Form";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const SignUp = ({ handleSetUsername }) => {
  const [signUpForm, setSignUpForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    console.log(signUpForm);
  }, [signUpForm]);

  return (
    <Layout>
      <Form
        type="Sign Up"
        form={signUpForm}
        handleFormChange={setSignUpForm}
        handleSetUsername={handleSetUsername}
      />
    </Layout>
  );
};

SignUp.propTypes = {
  handleSetUsername: PropTypes.func.isRequired,
};

export default SignUp;
