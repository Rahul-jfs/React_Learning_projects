import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type }) {
  const base =
    "bg-yellow-400 text-sm text-stone-800 rounded-full font-semibold uppercase inline-block transition-colors duration-300 cursor-pointer hover:bg-yellow-300 focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "bg-stone-400 text-sm text-stone-800 rounded-full font-semibold uppercase inline-block transition-colors duration-300 cursor-pointer hover:bg-stone-300 focus:outline-none hover:text-stone-800 focus:bg-stone-300 focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed  px-4 py-3 md:px-6 md:py-4",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
