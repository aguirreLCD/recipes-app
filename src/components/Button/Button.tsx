type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className }: ButtonProps) => {
  return <button className={`${className}`}>{children}</button>;
};

export default Button;
