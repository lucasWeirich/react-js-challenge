import { useState } from "react"
import styled from "styled-components"

export default function Form({ onFormSubmit }) {

  const [player01, setPlayer01] = useState({
    id: 1,
    name: 'Player 01',
    type: 'o',
    color: '#00a4e6',
    wins: 0
  })
  const [player02, setPlayer02] = useState({
    id: 2,
    name: 'Player 02',
    type: 'x',
    color: '#d31f1f',
    wins: 0
  })

  function handleChangePlayer1(e) {
    const { name, value } = e.target;

    setPlayer01(prev => {
      let newPlayer1 = {
        ...prev,
        [name]: value
      }
      return newPlayer1;
    })
  }

  function handleChangePlayer2(e) {
    const { name, value } = e.target;

    setPlayer02(prev => {
      let newPlayer1 = {
        ...prev,
        [name]: value
      }
      return newPlayer1;
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newDataPlayers = [player01, player02];
    console.log(newDataPlayers);
    onFormSubmit(newDataPlayers)
  }

  return <Wrapper onSubmit={handleSubmit}>
    <details>
      <summary>Update data Players</summary>

      <div>
        <label htmlFor="">Name: {player01.name}</label>
        <input type="text" placeholder="Name for player 01" name="name" onChange={handleChangePlayer1} />
      </div>

      <div>
        <label htmlFor="">Type: {player01.type}</label>
        <input type="text" placeholder="Type for player 01" name="type" onChange={handleChangePlayer1} />
      </div>

      <div>
        <label htmlFor="">Color:</label>
        <input
          type="color"
          name="color"
          value={player01.color}
          onChange={handleChangePlayer1} />
      </div>

      <Divisor />

      <div>
        <label htmlFor="">Name: {player02.name}</label>
        <input
          type="text"
          name="name"
          placeholder="Name for player 02"
          onChange={handleChangePlayer2} />
      </div>

      <div>
        <label htmlFor="">Type: {player02.type}</label>
        <input
          type="text"
          name="type"
          placeholder="Type for player 02"
          onChange={handleChangePlayer2} />
      </div>

      <div>
        <label htmlFor="">Color:</label>
        <input
          type="color"
          name="color"
          value={player02.color}
          onChange={handleChangePlayer2} />
      </div>

      <Button>Update Players</Button>
    </details>
  </Wrapper>
}

const Wrapper = styled.form`
  width: 300px;
  padding: 10px;
  border-radius: 0 0 5px 0;
  background: #444;
  position: absolute;
  top: 0;
  left: 0; 
  text-align: start;  

  & details {
    display: flex;

    & summary {
      cursor: pointer;
    }
  }

  & label {
    width: 100%;
    font-size: 14px;
  }

  & input {
    width: 100%;
    height: 35px;
    display:flex;
    border-radius: 5px;
    outline: none;
    border: none;

    &::placeholder {
      padding: 0 5px;
    }
  }
`

const Divisor = styled.hr`
  width: 100%;
  border: solid 1px #888; 
  border-radius: 10px;
`

const Button = styled.button`
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  background: #407014;
  cursor: pointer;
  transition: all 0.3s;
  margin: 10px auto 0;

  &:hover {
    background: #56941d;
  }
`