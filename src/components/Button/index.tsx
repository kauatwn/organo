import S from "./Button.module.css";

interface IButtonProps {
  text?: string;
  children?: React.ReactNode;
}

export default function Button({ text, children }: IButtonProps) {
  return <button className={S.btn}>{text ? text : children}</button>;
}
