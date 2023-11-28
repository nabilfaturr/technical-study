import { Link } from "react-router-dom";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ type, form, handleFormChange, handleSetUsername }) => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const title = type;

  const handleChange = (e) => {
    handleFormChange({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const endpoint = type === "Sign In" ? "sign-in" : "sign-up";
      const response = await fetch(`/api/auth/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (response.status === 200) {
        handleSetUsername(form.username);
        endpoint === "sign-up" ? navigate("/sign-in") : navigate("/");
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-xl gap-6 p-5 rounded-lg"
    >
      <h1 className="font-bold text-5xl text-center my-2">{title}</h1>
      <input
        onChange={handleChange}
        type="text"
        id="username"
        placeholder="username"
        className="h-12 border border-black rounded-md pl-4 py-7 text-lg"
      />
      <input
        onChange={handleChange}
        type="password"
        id="password"
        placeholder="password"
        className="h-12 border border-black rounded-md pl-4 py-7 text-lg"
      />
      <Button type={title} />
      <span className="flex gap-2">
        {type === "Sign Up" ? (
          <>
            <p>Already have an account?</p>
            <Link to={"/sign-in"} className="text-blue-700">
              Sign in
            </Link>
          </>
        ) : (
          <>
            <p>Dont have an account?</p>
            <Link to={"/sign-up"} className="text-blue-700">
              Sign up
            </Link>
          </>
        )}
      </span>
      {error && (
        <span className="text-red-600 font-semibold">
          <p>Error : {error}</p>
        </span>
      )}
    </form>
  );
};

Form.propTypes = {
  type: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  handleFormChange: PropTypes.func.isRequired,
  handleSetUsername: PropTypes.func.isRequired,
};

export default Form;
