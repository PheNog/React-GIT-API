
import React, { useState } from "react";
import axios from "axios";
import LOGOGIT from './LOGOGIT.png'
import * as S from './styled';
import { useNavigate } from "react-router-dom";
  

export function App(props) {
  const [usuario, setUsuario] = useState('')
  const navigate = useNavigate()

  const [error, setError] = useState(false)
  function handlePesquisa() {
      axios.get(`https://api.github.com/users/${usuario}/repos`).then(response=>{
        const repositories = response.data
        const repositoriesName = []
        repositories.map((repository)=> {
          repositoriesName.push(repository.name)
        })
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
        navigate('/repositories')
      }).catch(err => {
        setError(true)
      })
    }
  
  return (
    
<S.HomeContainer>
     <img src={LOGOGIT}/>
    <p>Digite o usuário que deseja pesquisar os repositorios.</p>
    <S.Content>
      
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
     
    </S.Content> 
    { error ? <S.ErrorMsg>Usuario nao encontrado.</S.ErrorMsg> : ''}
</S.HomeContainer>
    
    
  );
}

//JSX = HTML DENTRO DO JS EM FUNCS
// <> </> tags vazias sao fragments, usadas para poder retornar doms irmaos
// useState tem os [ usuario, setUsuario]