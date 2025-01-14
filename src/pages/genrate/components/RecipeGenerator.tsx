import { useState } from 'react';
import { Recipe } from './types';
import { RecipeForm } from './RecipeForm';
import { RecipeCard } from './RecipeCard';

export const RecipeGenerator = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    ingredients: string[],
    prepTime: number,
    cookTime: number
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://smart-chef-new-api.onrender.com/api/recommendation",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
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

      const data = await response.json();
      setRecipes(data);
    } catch (err) {
      setError("An error occurred while fetching recipes. Please try again.");
      console.error("Error fetching recipes:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Generate Your Recipe
      </h2>
      
      <RecipeForm onSubmit={handleSubmit} />
      
      <div className="mt-12">
        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};