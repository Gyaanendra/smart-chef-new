import { useState } from 'react';
import { RecipePreviewForm } from './RecipePreviewForm';
import { RecipePreviewCard } from './RecipePreviewCard';

interface Recipe {
  TranslatedRecipeName: string;
  Course: string;
  Cuisine: string;
  Diet: string;
  PrepTimeInMins: number;
  CookTimeInMins: number;
  TotalTimeInMins: number;
  Servings: number;
  TranslatedIngredients: string[];
  TranslatedInstructions: string[];
}

export const RecipePreviewGenerator = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (prompt: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://smart-chef-new-api.onrender.com/api/generated_recommendation",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setRecipes(data);
    } catch (err) {
      setError("An error occurred while generating recipes. Please try again.");
      console.error("Error generating recipes:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <RecipePreviewForm onSubmit={handleSubmit} />
      
      <div className="mt-8">
        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        )}
        
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
            {error}
          </div>
        )}
        
        {!loading && !error && recipes.length === 0 && (
          <div className="text-center text-gray-600">
            No recipes generated yet. Try entering a prompt above!
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-6 mt-6">
          {recipes.map((recipe, index) => (
            <RecipePreviewCard key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};