import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../services/services";
import Contact from "./Contact";
import GalleryPortrait from "./GalleryPortrait";
import GalleryStreet from "./GalleryStreet";
import GalleryStudio from "./GalleryStudio";
import Home from "./Home";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route exact path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path={ROUTES.STREET} element={<GalleryStreet />} />
      <Route path={ROUTES.STUDIO} element={<GalleryStudio />} />
      <Route path={ROUTES.PORTRAIT} element={<GalleryPortrait />} />
    </Routes>
  );
}
