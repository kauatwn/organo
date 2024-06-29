import "./DropdownField.css";

interface DropdownFieldProps {
  label: string;
  items: string[];
}

function DropdownField({ label, items }: DropdownFieldProps) {
  return (
    <div className="dropdown-field">
      <label htmlFor="">{label}</label>
      <select name="" id="">
        {items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default DropdownField;
