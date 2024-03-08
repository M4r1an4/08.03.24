import React from "react";
import './App.css'

function App(){
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [senha, setSenha] = React.useState('')
  const [sobrenome, setSobrenome] = React.useState('')
  const handleSubit = (event) => {
    event.preventDefault() // impede o comportamento padrão de recarregar a pagina ao clicar no botão.
    
    alert(`Nome: ${nome}, Sobrenome: ${sobrenome}, Email: ${email} `)
    // alert manda mensagem de 'erro'
  };

  return(
 <form onSubmit={handleSubit}>

  <h1>Forms</h1>


  <label htmlFor="nome">Nome:</label>
  <input type='text' name='nome' id='nome' 
  onChange={(e) => setNome(e.target.value)} />
  <br />

  <label htmlFor="sobrenome">Sobrenome:</label>
  <input type='text' name='sobrenome' id='sobrenome' 
  onChange={(e) => setSobrenome(e.target.value)} />
  <br />

  <label htmlFor="email">Email</label>
  <input type='text' name='email' id='email' value={email}
  onChange={(e) => setEmail(e.target.value)} />
  <br />

  <label htmlFor="senha">Senha</label>
  <input type='text' name='senha' id='senha' value={senha}
  onChange={(e) => setSenha(e.target.value)} />
  <br />

  <div className='check'>
    <input type="checkbox" name="chackbox" id="check"></input>
    <label htmlFor="checkbox"></label>
  </div>

  <button type="submit">Enviar</button>
 </form>
  );
}

export default App;