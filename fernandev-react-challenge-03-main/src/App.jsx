/*
* CHALLENGE progresso do formulário

* INSTRUÇÕES
Neste desafio sua missão é criar um formulário e seus 4 campos (com controlled inputs),
juntamente com uma barra de progresso que altera-se conforme o usuário preenche os campos.
- Crie também validações para cada campo conforme instruções abaixo.

* BARRA DE PROGRESSO
Para aproveitar estilização já definida, crie:
- a barra com um elemento pai chamado .bar-container e seu filho .bar

* CAMPOS DO FORMULÁRIO:
input - nome completo - válido se digitar no mínimo dois nomes,
input - email - válido se digitar um e-mail,
select - estado civil,
radio - gênero

Para validação de e-mail use a seguinte RegEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

* FUNCIONAMENTO
Espera-se que o formulário tenha 4 campos ao todo. Portanto, quando o usuário preencher
o primeiro campo, a barra de progresso deve assumir 25% do tamanho total;
o segundo campo, 50% e assim por diante...

Caso o usuário não tenha definido valores para os elementos de select e radio,
os mesmos não devem ser considerados como preenchidos até então.

Se o usuário preencher um campo e apagar seu valor, este campo deve ser considerado como vazio,
fazendo com que a barra de progresso regrida novamente.

Desabilitar o botão de enviar caso todos os campos não estejam preenchidos/válidos.

Ao enviar, deve-se apresentar um alert javascript com sucesso, limpar todos os campos
do formulário e zerar a barra de progresso novamente.
*/

import { useState } from "react";

function App() {

  const resetData = {
    fullName: '',
    email: '',
    relationship: '',
    genre: ''
  }

  const [data, setData] = useState(resetData);

  function handleSubmitForm(e) {
    e.preventDefault();

    console.log('Submit', data)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData(prev => {
      let newData = { ...prev, [name]: value }
      return newData;
    })
  }

  function calcProgress() {
    const amountToAdd = 100 / Object.keys(data).length;
    let value = 0;

    if (data.fullName) {
      let valid = data.fullName.split(' ');
      if (valid[1])
        value += amountToAdd;
    }
    if (data.email) {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regex.test(data.email))
        value += amountToAdd;
    }

    if (data.relationship) value += amountToAdd;
    if (data.genre) value += amountToAdd;

    return value;
  }

  return (
    <div className='App'>
      <h3>desafio fernandev</h3>
      <h1>progresso do formulário</h1>

      <main>

        <div className="bar-container">
          <div className="bar" style={{ width: `${calcProgress()}%` }}></div>
        </div>

        <form onSubmit={handleSubmitForm}>
          <div className='form-group'>
            <label htmlFor='fullName'>Nome Completo</label>
            <input type={'text'} name="fullName" value={data.fullName} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>E-mail</label>
            <input type="email" name="email" value={data.email} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='relationship'>Estado Civil</label>
            <select name="relationship" value={data.relationship} onChange={handleChange}>
              <option value=''>- selecione...</option>
              <option value='solteiro'>Solteiro</option>
              <option value='casado'>Casado</option>
              <option value='divorciado'>Divorciado</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='genre'>Gênero</label>
            <div className='radios-container'>
              <span>
                <input type='radio' name="genre" id="masculino" value="masculino" checked={data.genre === 'masculino'} onChange={handleChange} />
                <label htmlFor="masculino">Masculino</label>
              </span>
              <span>
                <input type='radio' name="genre" id="feminino" value="feminino" checked={data.genre === 'feminino'} onChange={handleChange} />
                <label htmlFor="feminino">Feminino</label>
              </span>
            </div>
          </div>
          <button disabled={calcProgress() !== 100}>Enviar Formulário</button>
        </form>
      </main>
    </div>
  );
}

export default App;
