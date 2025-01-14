import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./landing/land";
import ProfilePage from "./pages/profile/profile";
import ExplorePage from "./pages/explore/explore";
import ReconmendationPage from "./pages/get_reconmendation/getReconmendation";
import GenratePage from "./pages/genrate/genrate";
import RecipePageById from "./pages/recipePagebyId/recipePageById"; // Import your new page

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/recommendation" element={<ReconmendationPage />} />
        <Route path="/genrate" element={<GenratePage />} />
        <Route path="/recipe/:recipe_id" element={<RecipePageById />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}
