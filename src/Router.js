import { HashRouter, Routes, Route } from "react-router-dom";
import PageA from "./PageA";
import PageB from "./PageB";
import PageC from "./PageC";

function Router() {
  return (
    // <HashRouter>
      <Routes>
        <Route path="/pageA" element={<PageA />} />
        <Route path="/pageB" element={<PageB />} />
        <Route path="/pageC" element={<PageC />} />
      </Routes>
    // </HashRouter>
  );
}

export default Router;
