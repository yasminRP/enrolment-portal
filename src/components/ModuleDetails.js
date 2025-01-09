import { useParams } from "react-router-dom";
import { diplomas } from "../data/diplomas";

function ModuleDetails() {
  const { diplomaId, moduleId } = useParams();
  const diploma = diplomas.find((d) => d.id === diplomaId);
  const module = diploma?.modules.find((m) => m.id === moduleId);

  if (!module) return <h2>Module not found</h2>;

  return (
    <div>
      <h2>{module.name}</h2>
      <p>{module.description}</p>
    </div>
  );
}

export default ModuleDetails;
