import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  btnClassName,
  disabled,
  ...rest
}) => {
  return (
    <div className="my-4">
      <button
        disabled={disabled}
        type={type}
        className={`bg-amber-300 text-amber-900 rounded-full px-5 py-3 ${btnClassName}`}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
