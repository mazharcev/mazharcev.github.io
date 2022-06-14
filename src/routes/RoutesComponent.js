import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../services/services";
import Contact from "./Contact";
import GalleryStreet from "./GalleryStreet";
import GalleryStudio from "./GalleryStudio";
import Home from "./Home";
import Portfolio from "./Portfolio";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route exact path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path={ROUTES.STREET} element={<GalleryStreet />} />
      <Route path={ROUTES.STUDIO} element={<GalleryStudio />} />
    </Routes>
  );
}
