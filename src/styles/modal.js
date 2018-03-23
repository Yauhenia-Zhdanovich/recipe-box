import styled from 'styled-components';

export const Label = styled.label`
    margin-top:0.4rem;
`;
export const Window = styled.div`
    display:flex;
    flex-direction:column;
    width:500px;
    position:absolute;
    top:10%;
    left:50%;
    transform:translate(-50%,-10%);
    background:#fff;
    padding:2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius:6px;
`;
export const Text = styled.input`
    display:block;
    width:100%;
    border-radius:3px;
    height:1.8rem;
    padding-left:0.3rem;
    font-size:1rem;
`;
export const TextArea = styled.textarea`
    display:block;
    width:100%;
    font-size:1rem;
    border-radius:3px;
    height:6rem;
    font-family:'Source Sans Pro', Arial, Helvetica, sans-serif;
`;
export const ButtonGroup = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-top:1.3rem;
`;
export const Background = styled.div`
    height:calc(100vh);
    background:rgba(0,0,0,0.5);
    width:calc(100vw);
    position:absolute;
    top:0;
    left:0;
`;
