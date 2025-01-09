import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiplomaList from "./components/DiplomaList";
import DiplomaDetails from "./components/DiplomaDetails";
import ModuleDetails from "./components/ModuleDetails";
import RegistrationForm from "./components/RegistrationForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DiplomaList />} />
        <Route path="/diplomas" element={<DiplomaList />} />
        <Route path="/diplomas/:diplomaId" element={<DiplomaDetails />} />
        <Route path="/diplomas/:diplomaId/:moduleId" element={<ModuleDetails />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
