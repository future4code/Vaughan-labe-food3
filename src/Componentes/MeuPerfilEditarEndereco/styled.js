import styled from "styled-components";

export const Bar = styled.div`
    width: 100%;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Imagem = styled.img`
    padding: 10px;
    cursor: pointer;
    position: absolute;
    left: 10px;
    top: 0px;
`;

export const Title = styled.span`
    font-family: roboto;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    >form>input{
        border: 1px solid #b8b8b8;
        border-radius: 2px;
        margin: 7px;
        width: 20.5rem;
        height: 3.5rem;
    }
    >form>button{
        width: 20.5rem;
        height: 2.625rem;
        margin: 10px;
        padding: 0.75rem 1rem;
        border-radius: 2px;
        border: none;
        background-color: #e8222e;
        font-size: 1rem;
        font-family: "Roboto", sans-serif;
    }
`

