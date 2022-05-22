import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

export function RepositoryList(){
    const [repositorios, setRepositorios] = useState([]);
    useEffect(()=>{
        fetch('http://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositorios(data))
    }, []) 
    // se o array final estiver vazio só executa uma vez    
    
    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                { repositorios.map(repositorio => 
                    {
                        return <RepositoryItem repository={repositorio} key={repositorio.name}  />
                    }
                )}
            </ul>
        </section>
    )
}