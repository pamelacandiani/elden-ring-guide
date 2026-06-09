import {
  createContext,
  useReducer,
  ReactNode,
} from 'react';

type Boss = {
  id: string;
  name: string;
  image: string;
  region: string;
};

type State = {
  favorites: Boss[];
};

type Action =
  | { type: 'ADD_FAVORITE'; payload: Boss }
  | { type: 'REMOVE_FAVORITE'; payload: string };

const initialState: State = {
  favorites: [],
};

function favoritesReducer(
  state: State,
  action: Action
): State {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (boss) => boss.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

export const FavoritesContext =
  createContext<any>(null);

export function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(
    favoritesReducer,
    initialState
  );

  return (
    <FavoritesContext.Provider
      value={{
        favorites: state.favorites,
        dispatch,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}