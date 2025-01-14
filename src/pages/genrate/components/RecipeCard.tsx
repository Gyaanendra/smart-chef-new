import { Recipe } from './types';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const formatList = (text: string): string[] => {
    return text
      .split(",")
      .map(item => item.trim())
      .filter(item => item.length > 0);
  };

  const formatInstructions = (text: string): string[] => {
    return text
      .split(".")
      .map(item => item.trim())
      .filter(item => item.length > 0);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={recipe.image_src || "/api/placeholder/800/400"}
        alt={recipe.TranslatedRecipeName}
      />
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {recipe.TranslatedRecipeName}
        </h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Course:</span> {recipe.Course || "Not specified"}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Cuisine:</span> {recipe.Cuisine || "Not specified"}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Prep Time:</span> {recipe.PrepTimeInMins} mins
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Cook Time:</span> {recipe.CookTimeInMins} mins
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Ingredients</h4>
            <ul className="list-disc pl-5 space-y-1">
              {formatList(recipe.TranslatedIngredients).map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Instructions</h4>
            <ol className="list-decimal pl-5 space-y-2">
              {formatInstructions(recipe.TranslatedInstructions).map((instruction, index) => (
                <li key={index} className="text-gray-600">{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
