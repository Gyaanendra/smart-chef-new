import React, { useState, useEffect } from "react";
import { Clock, Users } from "lucide-react";

interface RecipeProps {
  recipe: {
    RecipeName: string;
    CleanedIngredients: string;
    PrepTimeInMins: number;
    CookTimeInMins: number;
    TotalTimeInMins: number;
    Servings: number;
  };
}

interface TransformedData {
  PrepTimeInMins: number;
  CookTimeInMins: number;
  ingredients: string[];
}

interface RecipeResponse {
  unique_id: string;
  TranslatedRecipeName: string;
  image_src: string;
  TotalTimeInMins: number;
  Servings: number;
  Cuisine: string;
  Diet: string;
  Course: string;
}

const MoreRecipe: React.FC<RecipeProps> = ({ recipe }) => {
  const [recipes, setRecipes] = useState<RecipeResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const transformData = (
    recipeData: RecipeProps["recipe"]
  ): TransformedData => {
    // Just convert to array by splitting on commas
    const ingredients = recipeData.CleanedIngredients.split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    return {
      PrepTimeInMins: recipeData.PrepTimeInMins || 0,
      CookTimeInMins: recipeData.CookTimeInMins || 0,
      ingredients,
    };
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const transformedData = transformData(recipe);

        const response = await fetch(
          "https://smart-chef-new-api.onrender.com/api/more_recipes",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(transformedData),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }

        const data: RecipeResponse[] = await response.json();
        setRecipes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [recipe]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center p-4 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.unique_id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
        >
          <img
            src={recipe.image_src}
            alt={recipe.TranslatedRecipeName}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src = "/placeholder-recipe.jpg";
            }}
            className="w-full h-48 object-cover"
          />
          <div className="p-5 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2 line-clamp-2 text-gray-800">
                {recipe.TranslatedRecipeName}
              </h3>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  {recipe.TotalTimeInMins} mins
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-green-500" />
                  Serves {recipe.Servings}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                  {recipe.Cuisine}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                  {recipe.Diet}
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                  {recipe.Course}
                </span>
              </div>
            </div>
            <a href={`/recipe/${recipe.unique_id}`}>
              <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                View Recipe
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreRecipe;
