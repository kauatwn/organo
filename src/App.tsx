import { useState } from "react";
import Banner from "./components/Banner";
import CollaboratorForm from "./components/CollaboratorForm";
import TeamSection from "./components/TeamSection";
import { ICollaborator, ITeam } from "./interfaces";

function App() {
  const teams: ITeam[] = [
    {
      name: "Programação",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      name: "Front-end",
      primaryColor: "#82cffa",
      secondaryColor: "#e8f8ff",
    },
    {
      name: "Data Science",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2",
    },
    {
      name: "DevOps",
      primaryColor: "#e06b69",
      secondaryColor: "#fde7e8",
    },
    {
      name: "UX e Design",
      primaryColor: "#db6ebf",
      secondaryColor: "#fae9f5",
    },
    {
      name: "Mobile",
      primaryColor: "#ffba05",
      secondaryColor: "#fff5d9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#ff8a29",
      secondaryColor: "#ffeedf",
    },
  ];

  const [collaborators, setCollaborators] = useState<ICollaborator[]>([]);

  const handleCollaboratorSubmit = (collaborator: ICollaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <>
      <Banner />
      <CollaboratorForm
        onCollaboratorSubmit={handleCollaboratorSubmit}
        teams={teams}
      />
      <TeamSection collaborators={collaborators} teams={teams} />
    </>
  );
}

export default App;
