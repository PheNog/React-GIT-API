import React, { useEffect, useState } from "react";
import * as S from './styled';
import { useNavigate } from "react-router-dom";




export function Repositories(){
 const [repositories, setRepositories] = useState([])
 const navigate = useNavigate()

    useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if (repositoriesName !== null){
        repositoriesName = JSON.parse(repositoriesName)
        setRepositories(repositoriesName)
        localStorage.clear()
    }else {
        navigate('/')
    }

 }, [navigate])


    return(
        <S.Container>
            <S.Title> Repositorios do Usuário:</S.Title>
            <S.List>
                { repositories.map(repository => {
                    return (
                        <S.ListItem> Repositório: {repository}</S.ListItem>
                    )
                }) }
            </S.List>
            <S.LinkHome to="/"> Voltar a Home. </S.LinkHome>
        </S.Container>
    )
}