import PropTypes from "prop-types";

const Button = ({ type }) => {
  return (
    <button
      type="submit"
      className="border border-black h-12 rounded-lg bg-black text-white text-xl hover:opacity-80 font-bold"
    >
      {type}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Button;
