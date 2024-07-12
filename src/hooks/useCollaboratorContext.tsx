import { useContext } from "react";
import { CollaboratorContext } from "../contexts";

export default function useCollaboratorContext() {
  const context = useContext(CollaboratorContext);

  if (context === undefined) {
    throw new Error(
      "useCollaboratorContext must be used within a CollaboratorProvider"
    );
  }

  return context;
}
