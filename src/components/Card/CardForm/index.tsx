import "./CardForm.css";
import TextField from "../../TextField";

function CardForm() {
  return (
    <form action="" className="card-form">
      <TextField label="Nome" placeholder="Digite seu nome" />
      <TextField label="Cargo" placeholder="Digite seu cargo" />
      <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
    </form>
  );
}

export default CardForm;
