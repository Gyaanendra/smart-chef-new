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
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center md:items-start">
      {/* Recipe Image Section - 50% on larger screens */}
      <div className="w-full md:w-1/2 h-80 md:h-[800px] rounded-lg overflow-hidden shadow-lg mt-6 md:ml-4">
        <img
          src={recipe.image_src}
          alt={recipe.RecipeName}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Recipe Details Section */}
      <div className="flex flex-col justify-between w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          {recipe.RecipeName}
        </h1>

        <div className="flex flex-wrap gap-3 mb-6">
          {[recipe.Cuisine, recipe.Diet, recipe.Course].map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-between mb-6 text-sm text-gray-600">
          <div className="flex items-center mb-2">
            <Clock className="w-5 h-5 mr-2" />
            <span>Prep: {recipe.PrepTimeInMins} mins</span>
          </div>
          <div className="flex items-center mb-2">
            <Utensils className="w-5 h-5 mr-2" />
            <span>Cook: {recipe.CookTimeInMins} mins</span>
          </div>
          <div className="flex items-center mb-2">
            <Users className="w-5 h-5 mr-2" />
            <span>Serves: {recipe.Servings}</span>
          </div>
        </div>

        <hr className="border-t border-gray-300 my-6" />

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Ingredients
        </h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          {ingredientsList.map((ingredient, index) => (
            <li key={index} className="mb-1">
              {ingredient.trim()}
            </li>
          ))}
        </ul>

        <hr className="border-t border-gray-300 my-6" />

        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Instructions
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-3">
          {recipe.Instructions.split(".")
            .filter((step) => step.trim() !== "")
            .map((step, index) => (
              <li key={index}>{step.trim()}.</li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
