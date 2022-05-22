import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repository = {
    name: 'unform',
    description: 'repositpry',
    link: 'https://github.com/jhennymatias/automatizacao'
};

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositorios</h1>
            <ul>
                <RepositoryItem 
                    repository={repository} 
                />
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                
            </ul>
        </section>
    )
}