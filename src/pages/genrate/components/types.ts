export interface Recipe {
    TranslatedRecipeName: string;
    image_src?: string;
    Course?: string;
    Cuisine?: string;
    Diet?: string;
    Servings?: string;
    PrepTimeInMins?: number;
    CookTimeInMins?: number;
    TotalTimeInMins?: number;
    TranslatedIngredients: string;
    TranslatedInstructions: string;
  }