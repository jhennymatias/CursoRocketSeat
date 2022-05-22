import {useState} from 'react';

export function Counter(){
    //let it change
    let [contador, setContador] = useState(0);
    function increment () {
        setContador(contador + 1);
    }

    return(
        <div>
            <h2>{contador}</h2>
            <button type="button" onClick={increment} >
                Add
            </button>
        </div>
    )
}