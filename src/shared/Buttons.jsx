export default function Buttons({ children }) {
  return (
    <button className="text-3xl rounded-2xl  p-2 border-solid border-2 border-slate-400 text-slate-200 font-bold">
      {children}
    </button>
  );
}
