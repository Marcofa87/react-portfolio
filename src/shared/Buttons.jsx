import PropTypes from "prop-types";

export default function Buttons({ children, onClick }) {
  return (
    <button
      className="text-2xl rounded-2xl  p-2 border-solid border-2 border-slate-50  font-bold hover:bg-slate-50 hover:text-slate-900  "
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
