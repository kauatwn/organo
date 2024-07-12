import Banner from "./components/Banner";
import CollaboratorForm from "./components/CollaboratorForm";
import TeamSection from "./components/TeamSection";
import { CollaboratorProvider } from "./contexts/CollaboratorContext";

function App() {
  return (
    <CollaboratorProvider>
      <Banner />
      <CollaboratorForm />
      <TeamSection />
    </CollaboratorProvider>
  );
}

export default App;
