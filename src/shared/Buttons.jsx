import PropTypes from "prop-types";

export default function Buttons({ children, onClick }) {
  return (
    <button
      className="text-3xl rounded-2xl  p-2 border-solid border-2 border-slate-400 text-slate-50 font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Buttons.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.node.isRequired,
};
