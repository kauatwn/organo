import { ICollaborator, ITeam } from ".";

interface ICollaboratorContext {
  teams: ITeam[];
  collaborators: ICollaborator[];
  onCollaboratorSubmit: (collaborator: ICollaborator) => void;
}

export default ICollaboratorContext;
