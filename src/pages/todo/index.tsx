import { Button, TextField } from "@mui/material";
import { TodoContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { ITodo } from "../../redux/reducer/inteface";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { addTodo, deleteTodo, updateTodo } from '../../redux/action/action'
import { useState } from "react";

export default function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector((state: ITodo[]) => state);

    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            dispatch(newTodo);
            setNewTodo('');
        }
    }
    return (
        <TodoContainer>
            <div className="title">
                <h1>Todo list</h1>
                <div className="header">
                    <TextField
                        className="todo-input"
                        label="Todo"
                        variant="outlined"
                    ></TextField>
                    <Button
                        onClick={addTodo}
                        className="btn"
                        variant="outlined"
                    >Add</Button>
                </div>
                <div className="list-item">
                    {todos.map((item, index) =>
                        <div className="singleTodo" key={index}>
                            <div className="content">
                                <span className="todo-no">{index + 1}.</span>
                                <span>{item.content}</span>
                            </div>
                            <div className="btnGroup">
                                <EditIcon className="edit"></EditIcon>
                                <DeleteIcon className="delete"></DeleteIcon>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </TodoContainer>
    )
}
