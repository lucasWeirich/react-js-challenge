import styled from "styled-components";

export const Players = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 50px;
  justify-content: center;
`;

export const Player = styled.h4`
  display: flex;
  justify-content: center;
  color: ${p => p.color ? p.color : '#FFF'};
  padding: 6px 15px;
  border-radius: 5px;
  background: #333;
  font-size: 20px;
  font-weigth: bold;
  position: relative;

  & span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #333;
    padding: 10px;
    position: absolute;
    top: -50px; 
  }
`;

export const BoardGame = styled.div`
  width: 610px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(3, 200px);
  gap: 5px;
  padding: 5px;
  box-shadow: 5px 5px 20px 0px #111;
  border-radius: 20px;
  overflow: hidden;
`;

export const BlockBoard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
  color: ${p => p.color ? p.color : '#888'};
  aspect-ratio: 1/1;
  font-size: 60px;
  text-shadow: 2px 2px 2px #222;
  transition: all 0.5s;
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:disabled {
    cursor: no-drop;
  }

  &:active:not(:disabled) {
    transition: all 0.3s;
    scale: 0.9;
  }

  :hover:not(:disabled) {
    background-color: #333;
  }
`;

export const Reset = styled.button`
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  background: #941d1d;
  cursor: pointer;
  transition: all 0.3s;
  display: none;

  &.active {
    display: initial;
  }

  &:hover {
    background: #99391d;
  }
`