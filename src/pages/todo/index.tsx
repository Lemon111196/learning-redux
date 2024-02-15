import { Button, TextField } from "@mui/material";
import { TodoContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { ITodo } from "../../redux/reducer/inteface";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { addTodo, deleteTodo, updateTodo } from '../../redux/action/action'
import { useState } from "react";
import Dialog from "../../components/Modal";

export default function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state: ITodo[]) => state);

  const [editTodo, setEditTodo] = useState({ id: 0, text: '' });
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [deleteTodoId, setDeleteTodoId] = useState(0);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [newTodo, setNewTodo] = useState('');

  const createTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
    console.log(newTodo);
  }

  //!Delete todos
  const handleDelete = (id: number) => {
    setDeleteTodoId(id);
    setIsDeleteDialogOpen(true);
  }

  const handleDeleteSubmit = () => {
    dispatch(deleteTodo(deleteTodoId));
    setIsDeleteDialogOpen(false);
  }

  const handleDeleteCancel = () => {
    setDeleteTodoId(0);
    setIsDeleteDialogOpen(false);
  }


  //!Edit todos
  const handleEdit = (id: number, text: string) => {
    setEditTodo({ id, text });
    setIsEditDialogOpen(true);
  }

  const handleEditSubmit = () => {
    dispatch(updateTodo(editTodo.id, editTodo.text));
    setIsEditDialogOpen(false);
  }

  const handleEditCancel = () => {
    setIsEditDialogOpen(false);
  }

  return (
    <TodoContainer>
      <div className="title">
        <h1>Todo list</h1>
        <div className="header">
          <TextField
            name="todo"
            className="todo-input"
            label="Todo"
            variant="outlined"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          ></TextField>
          <Button
            onClick={createTodo}
            className="btn"
            variant="outlined"
          >Add</Button>
        </div>
        <div className="list-item">
          {todos.map((item, index) =>
            <div className="singleTodo" key={index}>
              <div className="content">
                <span className="todo-no">{index + 1}.</span>
                <span>{item.text}</span>
              </div>
              <div className="btnGroup">
                <EditIcon className="edit"
                  onClick={() => handleEdit(item.id, item.text)}
                ></EditIcon>
                <DeleteIcon className="delete"
                  onClick={() => handleDelete(item.id)}
                ></DeleteIcon>
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog
        open={isEditDialogOpen}
        title="Edit Todo"
        onCancel={handleEditCancel}
        onSubmit={handleEditSubmit}
      >
        <TextField
          label="Edit Todo"
          variant="outlined"
          value={editTodo.text}
          onChange={(e) => setEditTodo({ ...editTodo, text: e.target.value })}
        />
      </Dialog>
      <Dialog
        open={isDeleteDialogOpen}
        title="Delete"
        onCancel={handleDeleteCancel}
        onSubmit={handleDeleteSubmit}
      >
        <p>Are you sure?</p>
      </Dialog>
    </TodoContainer>
  )
}
