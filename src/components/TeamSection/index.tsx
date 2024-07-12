import { useCollaboratorContext } from "../../hooks";
import CardTeam from "../CardTeam";
import "./TeamSection.css";

function TeamSection() {
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
              className="team-section"
              style={{
                backgroundColor: team.secondaryColor,
              }}
            >
              <div className="team-section-title">
                <h3>{team.name}</h3>
                <hr style={{ backgroundColor: team.primaryColor }} />
              </div>
              <div className="team-section-card-list">
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

export default TeamSection;
