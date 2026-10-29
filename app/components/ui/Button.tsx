interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = ({ variant = "primary", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`btn btn-${variant}`}
    />
  );
};

export default Button;
