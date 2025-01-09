import { useParams, Link } from "react-router-dom";
import { diplomas } from "../data/diplomas";

function DiplomaDetails() {
  const { diplomaId } = useParams();
  const diploma = diplomas.find((d) => d.id === diplomaId);

  if (!diploma) return <h2>Diploma not found</h2>;

  return (
    <div>
      <h2>{diploma.name}</h2>
      <ul>
        {diploma.modules.map((module) => (
          <li key={module.id}>
            <Link to={`/diplomas/${diplomaId}/${module.id}`}>{module.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DiplomaDetails;
