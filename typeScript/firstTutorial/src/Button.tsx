import style from "./App.module.css";

const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }
> = ({ children = "button", className, ...rest }) => {
  return (
    <button className={[style.button, className].join(" ")} {...rest}>
      {children}
    </button>
  );
};

export default Button;
