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
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {recipe.TranslatedRecipeName}
        </h3>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <p className="text-gray-600">Course: {recipe.Course}</p>
            <p className="text-gray-600">Cuisine: {recipe.Cuisine}</p>
            <p className="text-gray-600">Diet: {recipe.Diet}</p>
          </div>
          <div>
            <p className="text-gray-600">Prep Time: {recipe.PrepTimeInMins} mins</p>
            <p className="text-gray-600">Cook Time: {recipe.CookTimeInMins} mins</p>
            <p className="text-gray-600">Servings: {recipe.Servings}</p>
          </div>
        </div>
  
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2">Ingredients:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {recipe.TranslatedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
  
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Instructions:</h4>
          <div className="text-gray-600">
            {recipe.TranslatedInstructions.map((instruction, index) => (
              <p key={index} className="mb-2">{instruction}</p>
            ))}
          </div>
        </div>
      </div>
    );
  };