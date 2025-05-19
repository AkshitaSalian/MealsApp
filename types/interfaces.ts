export interface IMeals {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}

export interface IPlace {
  id: string;
  name: string;
  imageUrl: string;
  address: string;
  location: string;
}
