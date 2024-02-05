import { ITodo } from "./inteface";

const initialState: ITodo[] = [];
export const todoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload)
        case 'UPDATE_TODO':
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