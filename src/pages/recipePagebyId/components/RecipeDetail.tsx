import React from "react";
import { Clock, Users, Utensils } from "lucide-react";

interface RecipeDetailProps {
  recipe: {
    RecipeName: string;
    image_src: string;
    Cuisine: string;
    Diet: string;
    Course: string;
    PrepTimeInMins: number;
    CookTimeInMins: number;
    TotalTimeInMins: number;
    Servings: number;
    Ingredients: string;
    Instructions: string;
  };
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
  const ingredientsList = recipe.Ingredients.split(",");

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Image Section (40% width on medium screens and above) */}
      <div className="w-full md:w-2/5 h-64 md:h-full relative">
        <img
          src={recipe.image_src}
          alt={recipe.RecipeName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Recipe Details Section (60% width on medium screens and above) */}
      <div className="w-full md:w-3/5 p-6 bg-white overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{recipe.RecipeName}</h1>

          <div className="flex flex-wrap gap-2 mb-4">
            {[recipe.Cuisine, recipe.Diet, recipe.Course].map((item, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-between mb-6">
            <div className="flex items-center mr-4 mb-2">
              <Clock className="w-4 h-4 mr-2" />
              <span>Prep: {recipe.PrepTimeInMins} mins</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <Utensils className="w-4 h-4 mr-2" />
              <span>Cook: {recipe.CookTimeInMins} mins</span>
            </div>
            <div className="flex items-center mb-2">
              <Users className="w-4 h-4 mr-2" />
              <span>Serves: {recipe.Servings}</span>
            </div>
          </div>

          <hr className="my-6 border-t border-gray-300" />

          <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc pl-5 mb-6">
            {ingredientsList.map((ingredient, index) => (
              <li key={index} className="mb-1">
                {ingredient.trim()}
              </li>
            ))}
          </ul>

          <hr className="my-6 border-t border-gray-300" />

          <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
          <ol className="list-decimal pl-5">
            {recipe.Instructions.split(".")
              .filter((step) => step.trim() !== "")
              .map((step, index) => (
                <li key={index} className="mb-3">
                  {step.trim()}.
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
