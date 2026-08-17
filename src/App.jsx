import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/proyek/:slug" element={<ProjectDetail />} />
      </Route>
    </Routes>
  );
}
