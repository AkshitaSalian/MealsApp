import { createContext, useState, ReactNode } from "react";

interface FavouritesContextType {
  ids: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
}

const FavouritesContext = createContext<FavouritesContextType>({
  ids: [],
  addFavourite: (id: string) => {},
  removeFavourite: (id: string) => {},
  isFavourite: (id: string) => false,
});

const FavouritesContextProvider = ({ children }: { children: ReactNode }) => {
  const [favMealIds, setFavMealIds] = useState<string[]>([]);

  const addFavourite = (id: string) => {
    setFavMealIds((prevFavIds) => [...prevFavIds, id]);
  };

  const removeFavourite = (id: string) => {
    setFavMealIds((prevFavIds) => prevFavIds.filter((mealId) => mealId !== id));
  };

  const isFavourite = (id: string) => {
    return favMealIds.includes(id);
  };

  const value: FavouritesContextType = {
    ids: favMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
    isFavourite: isFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export { FavouritesContext, FavouritesContextProvider };
export default FavouritesContextProvider;
