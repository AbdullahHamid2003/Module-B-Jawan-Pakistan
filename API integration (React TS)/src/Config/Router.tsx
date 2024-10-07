import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "../Pages/projects";
import AddProject from "../Pages/addProjects";
export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="add" element={<AddProject />} />
          <Route path="/add/:id" element={<AddProject />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}