import { useState } from 'react'

const MyForm = (user) => {
  // - Gerenciamento de dados
  // - User - Controlled inputs
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [description, setDescription] = useState(user ? user.description : '');
  const [role, setRole] = useState(user ? user.role : '');

  /*function handleName (e) {
    console.log(e)
  } */

  function handleName (e) {
    setName(e.target.value);
  }

  function handleEmail (e) {
    setEmail(e.target.value);
  } /*Simplificação de gerenciamento de dados
  Também podemos usar a arrow function inline dentro 
  o onChange={(e) => setEmail(e.target.value)}  */

  function handleDescription (e) {
    setDescription(e.targe.value);
  }
  function handleRole (e) {
    setRole(e.target.value);
  }

  function handleSubmit (e) {
    e.preventDefault(); // previne o pageload (ação padrão do html ao enviar formulários!!!)
    console.log('evento prevenido!')
    console.log(`${name}
      ${email}
      ${description}
      ${role}`)


    // Resetando o valor dos forms
    setName('');
    setEmail('')
    setDescription('');
    /*Basta atribuir o valor vazio aos hooks */
  }

  return (
    <div>
      {/* Criação de Forms */}
      <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input 
              type='text' 
              placeholder='Insira seu nome aqui' 
              onChange={handleName} 
              id='name'
              value={name}></input><br /> 
            { /*Label envolvendo o input */}
            <label htmlFor='email'>
              <span>E-mail:</span>
              <input 
                type="text" 
                name="email" 
                id="email" 
                placeholder='Digite o seu e-mail' 
                onChange={handleEmail}
                value={email}/>
            </label>
            <br />
            <label htmlFor="description">
              <span>Descrição:</span>
              <textarea 
                name="description" 
                id="description" 
                rows="5"
                cols='25'
                value={description}
                placeholder='Insira a descrição aqui.'
                onChange={handleDescription}></textarea>
            </label><br />
            <label htmlFor="role">
                <span>Função:</span>
              <select 
                name="role" 
                id="role"
                onChange={handleRole}>
                  <option value="user">Usuário</option>
                  <option value="editor">Editor</option>
                  <option value="admin">Administrador</option>
                </select>
            </label><br />
            <input type="submit" value="Enviar" />
      </form>
   </div>
  )
}

export default MyForm