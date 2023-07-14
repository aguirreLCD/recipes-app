type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className }: ButtonProps) {
  return <button className={`${className}`}>{children}</button>;
}
