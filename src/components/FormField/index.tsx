import { CardForm } from "../Card";
import "./FormField.css";

function FormField() {
  return (
    <section className="form-area">
      <h2>Preencha os dados para criar o card do colaborador</h2>
      <CardForm />
    </section>
  );
}

export default FormField;
