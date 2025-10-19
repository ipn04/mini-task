import { Product } from '@/src/types/Product';

export interface CartState {
  items: Product[];
}

export type CartAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'CLEAR_CART' }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } };

export const initialCartState: CartState = {
  items: []
};

export function AppReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const product = action.payload;
      const exists = state.items.some((item) => item.id === product.id);
      if (exists) return state;
      return { ...state, items: [...state.items, product] };
    }

    case 'REMOVE_FROM_CART': {
      const id = action.payload;
      return {
        ...state,
        items: state.items.filter((item) => item.id !== id)
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };

    case 'UPDATE_QUANTITY':
      return {
        items: state.items.map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: Math.max(1, action.payload.quantity) }
            : i
        )
      };

    default:
      return state;
  }
}
