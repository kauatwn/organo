import "./FormField.css";
import { useState } from "react";
import { CardForm } from "../Card";
import { ICollaborator } from "../../interfaces";

const teams: string[] = [
  "Programação",
  "Front-end",
  "Data Science",
  "DevOps",
  "UX e Design",
  "Mobile",
  "Inovação e Gestão",
];

function FormField() {
  const [collaborators, setCollaborators] = useState<ICollaborator[]>([]);

  const handleCollaboratorSubmit = (collaborator: ICollaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <section className="form-field">
      <h2>Preencha os dados para criar o card do colaborador</h2>
      <CardForm
        teamList={teams}
        onCollaboratorSubmit={handleCollaboratorSubmit}
      />
    </section>
  );
}

export default FormField;
