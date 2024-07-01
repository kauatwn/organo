import { ITeam, ICollaborator } from "../../interfaces";
import CardTeam from "../CardTeam";
import "./TeamSection.css";

interface ITeamSectionProps {
  teams: ITeam[];
  collaborators: ICollaborator[];
}

function TeamSection({ teams, collaborators }: ITeamSectionProps) {
  return (
    <>
      {teams.map((team) => (
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
            {collaborators.map((collaborator) => (
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
      ))}
    </>
  );
}

export default TeamSection;
