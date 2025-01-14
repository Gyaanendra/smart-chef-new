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

interface RecipePreviewCardProps {
  recipe: Recipe;
}

export const RecipePreviewCard = ({ recipe }: RecipePreviewCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {recipe.TranslatedRecipeName}
      </h3>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
        <div>
          <p>
            <span className="font-medium">Course:</span> {recipe.Course}
          </p>
          <p>
            <span className="font-medium">Cuisine:</span> {recipe.Cuisine}
          </p>
          <p>
            <span className="font-medium">Diet:</span> {recipe.Diet}
          </p>
        </div>
        <div>
          <p>
            <span className="font-medium">Prep Time:</span>{" "}
            {recipe.PrepTimeInMins} mins
          </p>
          <p>
            <span className="font-medium">Cook Time:</span>{" "}
            {recipe.CookTimeInMins} mins
          </p>
          <p>
            <span className="font-medium">Servings:</span> {recipe.Servings}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-700 mb-2">Ingredients:</h4>
        <ul className="list-disc list-inside space-y-1">
          {recipe.TranslatedIngredients.slice(0, 5).map((ingredient, index) => (
            <li key={index} className="text-gray-600">
              {ingredient}
            </li>
          ))}
          {recipe.TranslatedIngredients.length > 5 && (
            <li className="text-gray-500 italic">and more...</li>
          )}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-gray-700 mb-2">Instructions:</h4>
        <ul className="list-decimal list-inside space-y-1">
          {recipe.TranslatedInstructions.slice(0, 3).map(
            (instruction, index) => (
              <li key={index} className="text-gray-600">
                {instruction}
              </li>
            )
          )}
          {recipe.TranslatedInstructions.length > 3 && (
            <li className="text-gray-500 italic">and more...</li>
          )}
        </ul>
      </div>
    </div>
  );
};
