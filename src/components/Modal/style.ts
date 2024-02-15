import { Dialog } from "@mui/material";
import styled from "styled-components";

export const DialogContainer = styled(Dialog)`
     .dialog-container{
        padding: 20px;
        width: 500px;
        height: 200px;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        flex-direction: column;
        position: relative;
    }
    .header{
        position: absolute;
        top: 10px;
    }
    .text-field{
        position: absolute;
        top: 55px;
        margin-top: 20px;
        height: 10px;
        width: 92%;
    }
    .group-btn{
        position: absolute;
        bottom: 10px;
        right: 10px
    }
    .cancel{
        margin-right: 10px;
    }
    .confirm{
        margin-right: 10px;
    }
`;