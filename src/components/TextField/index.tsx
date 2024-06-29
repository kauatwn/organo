import { ChangeEvent } from "react";
import "./TextField.css";

interface ITextFieldProps {
  label: string;
  placeholder: string;
}

interface ITextFieldProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

function TextField({ label, placeholder, value, setValue }: ITextFieldProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="text-field">
      <label htmlFor="">{label}</label>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextField;
