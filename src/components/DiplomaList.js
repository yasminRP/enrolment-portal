import { Link } from "react-router-dom";
import { diplomas } from "../data/diplomas";

function DiplomaList() {
  return (
    <div>
      <h2>Diplomas Offered</h2>
      <ul>
        {diplomas.map((diploma) => (
          <li key={diploma.id}>
            <Link to={`/diplomas/${diploma.id}`}>{diploma.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DiplomaList;
