import { ITeam } from "../../interfaces";
import "./TeamField.css";

const teams: ITeam[] = [
  {
    title: "Programação",
    primaryColor: "#57c278",
    secondaryColor: "#d9f7e9",
  },
  {
    title: "Front-end",
    primaryColor: "#82cffa",
    secondaryColor: "#e8f8ff",
  },
  {
    title: "Data Science",
    primaryColor: "#a6d157",
    secondaryColor: "#f0f8e2",
  },
  {
    title: "DevOps",
    primaryColor: "#e06b69",
    secondaryColor: "#fde7e8",
  },
  {
    title: "UX e Design",
    primaryColor: "#db6ebf",
    secondaryColor: "#fae9f5",
  },
  {
    title: "Mobile",
    primaryColor: "#ffba05",
    secondaryColor: "#fff5d9",
  },
  {
    title: "Inovação e Gestão",
    primaryColor: "#ff8a29",
    secondaryColor: "#ffeedf",
  },
];

function TeamField() {
  return (
    <>
      {teams.map((team) => (
        <section
          key={team.title}
          className="team-field"
          style={{
            backgroundColor: team.secondaryColor,
          }}
        >
          <div className="team-title">
            <h3>{team.title}</h3>
            <hr style={{ backgroundColor: team.primaryColor }} />
          </div>
        </section>
      ))}
    </>
  );
}

export default TeamField;
