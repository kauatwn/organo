import { ChangeEvent } from "react";
import "./DropdownField.css";

interface DropdownFieldProps {
  label: string;
  items: string[];
  value: string;
  setValue: (value: string) => void;
}

function DropdownField({ label, items, value, setValue }: DropdownFieldProps) {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="dropdown-field">
      <label htmlFor="">{label}</label>
      <select name="" id="" value={value} onChange={handleSelectChange}>
        {items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default DropdownField;
