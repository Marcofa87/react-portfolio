export default function Buttons({ children, onClick }) {
  return (
    <button
      className="text-3xl rounded-2xl  p-2 border-solid border-2 border-slate-400 font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
