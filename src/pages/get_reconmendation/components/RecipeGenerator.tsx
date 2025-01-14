import React, { useState, useEffect } from "react";
import { Clock, Users } from "lucide-react";
import { RecipeForm } from "./RecipeForm";

interface Recipe {
  CookTimeInMins: number;
  Course: string;
  Cuisine: string;
  Diet: string;
  PrepTimeInMins: number;
  Servings: number;
  TotalTimeInMins: number;
  TranslatedIngredients: string;
  TranslatedInstructions: string;
  TranslatedRecipeName: string;
  image_src: string;
  unique_id: string;
}

interface ImageProps {
  src: string;
  alt: string;
}

interface ApiError extends Error {
  status?: number;
}

const ImageWithFallback: React.FC<ImageProps> = ({ src, alt }): JSX.Element => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect((): void => {
    setImgSrc(src);
  }, [src]);

  const handleImageError = (): void => {
    setImgSrc("/api/placeholder/400/300");
    setIsLoading(false);
  };

  const handleImageLoad = (): void => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-56 overflow-hidden rounded-t-xl">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        className="w-full h-full object-cover"
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export const RecipeGenerator: React.FC = (): JSX.Element => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    ingredients: string[],
    prepTime: number,
    cookTime: number
  ): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const response: Response = await fetch(
        "https://smart-chef-new-api.onrender.com/api/recommendation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_ingredients: ingredients,
            user_prep_time: prepTime,
            user_cook_time: cookTime,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: Recipe[] = await response.json();
      setRecipes(data);
    } catch (err) {
      const error = err as ApiError;
      setError("An error occurred while fetching recipes. Please try again.");
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderRecipeCard = (recipe: Recipe): JSX.Element => (
    <div
      key={recipe.unique_id}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
    >
      <ImageWithFallback
        src={recipe.image_src}
        alt={recipe.TranslatedRecipeName}
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
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Generate Your Recipe
      </h2>

      <RecipeForm onSubmit={handleSubmit} />

      <div className="mt-12">
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
            {error}
          </div>
        )}

        {!loading && !error && recipes.length === 0 && (
          <div className="text-center text-gray-600">
            No recipes found. Try generating some recipes!
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {recipes.map(renderRecipeCard)}
        </div>
      </div>
    </div>
  );
};
