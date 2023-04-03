import { useState } from "react"
import styled from "styled-components"

export function PopupMessages({ currentPlayer, info }) {

  return <Wrapper color={currentPlayer.color}>
    <h3>Current Player: <span>{currentPlayer.name}</span></h3>

    <p>{info}</p>
  </Wrapper>
}

const Wrapper = styled.div`
  width: 300px;
  padding: 10px;
  border-radius: 0 0 0 5px;
  background: #444;
  position: absolute;
  top: 0;
  right: 0;
  text-align: center;

  & h3 {
    font-size: 14px;
    font-weight: 400;

    & span {
      font-size: 20px;
      font-weight: 600;
      color: ${p => p.color};
    }
  }

  & p {
    color: #15e600;
  }
`