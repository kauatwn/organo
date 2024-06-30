import { ChangeEvent } from "react";
import "./DropdownField.css";

interface DropdownFieldProps {
  label: string;
  itemList: string[];
  selectedValue: string;
  setValue: (value: string) => void;
}

function DropdownField({
  label,
  itemList,
  selectedValue,
  setValue,
}: DropdownFieldProps) {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="dropdown-field">
      <label htmlFor="">{label}</label>
      <select name="" id="" value={selectedValue} onChange={handleSelectChange}>
        {itemList.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default DropdownField;
