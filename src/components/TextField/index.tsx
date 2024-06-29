import "./TextField.css";

interface TextFieldProps {
  label: string;
  placeholder: string;
}

function TextField(props: TextFieldProps) {
  return (
    <div className="text-field">
      <label htmlFor="">{props.label}</label>
      <input type="text" placeholder={props.placeholder} />
    </div>
  );
}

export default TextField;
