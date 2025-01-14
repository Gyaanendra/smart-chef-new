import React, { useState, useEffect } from "react";
import { Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";

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

const RecipeGrid: React.FC = () => {
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const recipesPerPage = 90;

  const fetchRecipes = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://smart-chef-new-api.onrender.com/api/display_recipe"
      );
      const data = await response.json();
      setAllRecipes(data);
    } catch (err) {
      setError("Failed to fetch recipes");
      console.error("Error fetching recipes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const totalPages = Math.ceil(allRecipes.length / recipesPerPage);
  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const currentRecipes = allRecipes.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo(0, 0);
    }
  };

  const ImageWithFallback: React.FC<ImageProps> = ({ src, alt }) => {
    const [imgSrc, setImgSrc] = useState<string>(src);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleError = (): void => {
      setImgSrc("/api/placeholder/400/300");
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
          onError={handleError}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    );
  };

  if (error) {
    return <div className="text-center p-4 text-red-500">{error}</div>;
  }

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push(-1);
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push(-1);
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(-1);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(-1);
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
        {currentRecipes.map((recipe) => (
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
              <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>

      {loading ? (
        <div className="text-center p-4">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex flex-wrap gap-2">
            {getPageNumbers().map((pageNum, index) =>
              pageNum === -1 ? (
                <span key={`ellipsis-${index}`} className="px-2 py-2">
                  ...
                </span>
              ) : (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-3 py-1 rounded-lg transition-colors duration-200 ${
                    currentPage === pageNum
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {pageNum}
                </button>
              )
            )}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeGrid;
