import "./CardForm.css";
import TextField from "../../TextField";
import DropdownField from "../../DropdownField";
import Button from "../../Button";
import { useState } from "react";
import { ICollaborator } from "../../../interfaces";

interface ICardFormProps {
  teamList: string[];
  onCollaboratorSubmit: (formData: ICollaborator) => void;
}

function CardForm({ teamList, onCollaboratorSubmit }: ICardFormProps) {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [team, setTeam] = useState<string>("");

  const handleCardFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCollaboratorSubmit({ name, image, position, team });
  };

  return (
    <form className="card-form" onSubmit={handleCardFormSubmit}>
      <TextField
        label="Nome"
        placeholder="Digite seu nome"
        selectedValue={name}
        setValue={(value) => setName(value)}
      />
      <TextField
        label="Cargo"
        placeholder="Digite seu cargo"
        selectedValue={position}
        setValue={(value) => setPosition(value)}
      />
      <TextField
        label="Imagem"
        placeholder="Digite o endereço da imagem"
        selectedValue={image}
        setValue={(value) => setImage(value)}
      />
      <DropdownField
        label="Time"
        itemList={teamList}
        selectedValue={team}
        setValue={(value) => setTeam(value)}
      />
      <Button text="Criar card" />
    </form>
  );
}

export default CardForm;
