import S from "./CollaboratorForm.module.css";
import { useState } from "react";
import TextField from "../TextField";
import DropdownField from "../DropdownField";
import Button from "../Button";
import { useCollaboratorContext } from "../../hooks";

export default function CollaboratorForm() {
  const { teams, onCollaboratorSubmit } = useCollaboratorContext();
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [team, setTeam] = useState<string>("");

  const handleCollaboratorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCollaboratorSubmit({ name, image, position, team });
  };

  return (
    <section className={S["collaborator-form-section"]}>
      <h2>Preencha os dados para criar o card do colaborador</h2>
      <form
        className={S["collaborator-form"]}
        onSubmit={handleCollaboratorSubmit}
      >
        <TextField
          label="Nome"
          placeholder="Digite seu nome"
          selectedValue={name}
          setValue={(value) => setName(value)}
          isRequired={true}
        />
        <TextField
          label="Cargo"
          placeholder="Digite seu cargo"
          selectedValue={position}
          setValue={(value) => setPosition(value)}
          isRequired={true}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o link HTTP da imagem (opcional)"
          selectedValue={image}
          setValue={(value) => setImage(value)}
        />
        <DropdownField
          label="Time"
          items={teams.map((team) => team.name)}
          selectedValue={team}
          setValue={(value) => setTeam(value)}
          isRequired={true}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
}
