import { useCollaboratorContext } from "../../hooks";
import CardTeam from "../CardTeam";
import S from "./TeamSection.module.css";

export default function TeamSection() {
  const { teams, collaborators } = useCollaboratorContext();

  return (
    <>
      {teams.map((team) => {
        const teams = collaborators.filter(
          (collaborator) => collaborator.team === team.name
        );

        if (teams.length > 0) {
          return (
            <section
              key={team.name}
              className={S["team-section"]}
              style={{
                backgroundColor: team.secondaryColor,
              }}
            >
              <div className={S["team-section-title"]}>
                <h3>{team.name}</h3>
                <hr style={{ backgroundColor: team.primaryColor }} />
              </div>
              <div className={S["team-section-card-list"]}>
                {teams.map((collaborator) => (
                  <CardTeam
                    key={collaborator.name}
                    name={collaborator.name}
                    position={collaborator.position}
                    image={collaborator.image}
                    primaryColor={team.primaryColor}
                  />
                ))}
              </div>
            </section>
          );
        }
      })}
    </>
  );
}
