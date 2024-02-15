export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = (text: string,) => ({ // có tham số nên bắt buộc phải có param
    type: ADD_TODO,
    payload: { text }
});

export const deleteTodo = (id: number) => ({
    type: DELETE_TODO,
    payload: id,
});

export const updateTodo = (id: number, newText: string) => ({
    type: UPDATE_TODO,
    payload: { id, newText },
});