import { login } from './utils';
import './index.css';
import { useEffect, useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {

  const [error, setError] = useState('');
  const [disabledButton, setDisabledButton] = useState(true);
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  function handleChange(e) {
    const { id, value } = e.target;

    setData(prev => {
      let newData = { ...prev, [id]: value }
      return newData;
    })
  }

  async function handleSubmit() {
    setError(null);
    setDisabledButton(true);
    await login(data)
      .then(() => {
        alert('Acesso permitido!');
        setData({ email: '', password: '' });
      })
      .catch((err) => {
        setError(err.message);
        setData(prev => {
          let newData = { ...prev, password: '' };
          return newData;
        });
      })
      .finally(() => console.log('request finality'))
  }

  function handleDisabledButton() {
    if (data.email === '' || data.password.length < 6)
      setDisabledButton(true);
    else
      setDisabledButton(false);
  }

  useEffect(() => {
    handleDisabledButton();
  }, [data])

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {
          error &&
          <div className='errorMessage'>{error}</div>
        }
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={data.email} onChange={handleChange} />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={data.password} onChange={handleChange} />
        </div>

        <div className='button'>
          <button onClick={handleSubmit} disabled={disabledButton}>Login</button>
        </div>
      </div>
    </div>
  );
}
