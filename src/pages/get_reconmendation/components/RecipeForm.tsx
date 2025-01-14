import { FormEvent, useState } from 'react';

interface RecipeFormProps {
  onSubmit: (ingredients: string[], prepTime: number, cookTime: number) => void;
}

export const RecipeForm = ({ onSubmit }: RecipeFormProps) => {
  const [ingredients, setIngredients] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ingredientsList = ingredients.split(",").map(i => i.trim());
    onSubmit(
      ingredientsList,
      parseInt(prepTime),
      parseInt(cookTime)
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Available Ingredients (comma separated)
          </label>
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., chicken, garlic, olive oil"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preparation Time (minutes)
            </label>
            <input
              type="number"
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="30"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cooking Time (minutes)
            </label>
            <input
              type="number"
              value={cookTime}
              onChange={(e) => setCookTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="45"
              required
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Generate Recipe
        </button>
      </form>
    </div>
  );
};
