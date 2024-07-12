import { ChangeEvent } from "react";
import S from "./DropdownField.module.css";

interface IDropdownFieldProps {
  label: string;
  items: string[];
  selectedValue: string;
  setValue: (value: string) => void;
  isRequired?: boolean;
}

export default function DropdownField({
  label,
  items,
  selectedValue,
  setValue,
  isRequired = false,
}: IDropdownFieldProps) {
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={S["dropdown-field"]}>
      <label htmlFor="">{label}</label>
      <select
        name=""
        id=""
        value={selectedValue}
        onChange={handleSelectChange}
        required={isRequired}
      >
        <option value="">Selecione uma opção</option>
        {items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}
