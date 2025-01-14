import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";
import Navbar from "../../components_global/navbar";
import MoreRecipe from "./components/morerecipe";
function RecipePageById() {
  const { recipe_id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          "https://smart-chef-new-api.onrender.com/api/recipeById",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ unique_id: recipe_id }), // Sending unique_id in the required format
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipe_id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="flex items-center justify-center h-screen">
        Recipe not found
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <RecipeDetail recipe={recipe} />
        <div className="mt-11">
          <h1>MoreRecipe</h1>
          <MoreRecipe recipe={recipe} />
        </div>
      </div>
    </div>
  );
}

export default RecipePageById;
