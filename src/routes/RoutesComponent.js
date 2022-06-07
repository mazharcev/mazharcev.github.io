import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../services/services";
import Home from "./Home";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route exact path={ROUTES.HOME} element={<Home />} />
      {/* <Route path="/about" element={<AboutSection />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}
