import PropTypes from "prop-types";

export default function Buttons({ children, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

Buttons.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};
