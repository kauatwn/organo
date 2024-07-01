import { ChangeEvent } from "react";
import "./TextField.css";

interface ITextFieldProps {
  label: string;
  placeholder: string;
  selectedValue: string;
  setValue: (value: string) => void;
  isRequired?: boolean;
}

function TextField({
  label,
  placeholder,
  selectedValue,
  setValue,
  isRequired = false,
}: ITextFieldProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="text-field">
      <label htmlFor="">{label}</label>
      <input
        type="text"
        value={selectedValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  );
}

export default TextField;
