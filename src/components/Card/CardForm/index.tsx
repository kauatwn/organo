import "./CardForm.css";
import TextField from "../../TextField";
import DropdownField from "../../DropdownField";
import Button from "../../Button";
import { useState } from "react";

function CardForm() {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [position, setPosition] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="card-form" onSubmit={handleSubmit}>
      <TextField
        label="Nome"
        placeholder="Digite seu nome"
        value={name}
        setValue={(value) => setName(value)}
      />
      <TextField
        label="Cargo"
        placeholder="Digite seu cargo"
        value={position}
        setValue={(value) => setPosition(value)}
      />
      <TextField
        label="Imagem"
        placeholder="Digite o endereço da imagem"
        value={image}
        setValue={(value) => setImage(value)}
      />
      <DropdownField label="Time" items={["Programação"]} />
      <Button text="Criar card" />
    </form>
  );
}

export default CardForm;
