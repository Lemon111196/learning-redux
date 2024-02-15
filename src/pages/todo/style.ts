import styled from "styled-components";

export const TodoContainer = styled.div`
    .title{
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    .header{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
    }
    .todo-input{
        width: 450px;
    }
    .btn{
        width: 75px;
        margin-left: 20px;
    }
    .singleTodo{
        display: flex;
        justify-content: space-between;
        width: 500px;
        margin: 10px
    }
    .edit{
        color: orange;
        cursor: pointer;
    }
    .delete{
        color: red;
        cursor: pointer;
    }
`;