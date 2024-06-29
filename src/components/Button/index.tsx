import "./Button.css";

interface IButtonProps {
  text: string;
}

function Button({ text }: IButtonProps) {
  return <button className="btn">{text}</button>;
}

export default Button;
