import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from '../action/action';
import { ITodo } from './inteface';

const initialState: ITodo[] = [];

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: Date.now(), text: action.payload.text }];

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.newText }
          : todo
      );
    default:
      return state;
  }
};

export default todoReducer;