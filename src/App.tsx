import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AboutPage, ContactPage, HomePage, ProjectsPage } from "./pages";
import NavBar from "./components/NavBar.tsx";

export default function App() {
  return (
    <main className={"bg-slate-300/20"}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </main>
  );
}