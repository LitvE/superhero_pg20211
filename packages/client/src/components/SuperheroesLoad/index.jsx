import React, { useEffect, useState } from 'react';
import * as API from '../../api';

function SuperheroesLoad() {
    const [superheroes, setSuperheroes] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(()=>{
        setIsFetching(true);
        API.getSuperheroes(currentPage)
        .then((result) => {
            console.log(result.data.data);
            setSuperheroes(result.data.data);
        })
        .catch((error) => {setIsError(error)})
        .finally(() => {setIsFetching(false);});
       
    },[currentPage])

    const prevPage = () =>{
        if(currentPage > 1) setCurrentPage(currentPage-1);
    }

    const nextPage = () =>{
        setCurrentPage(currentPage+1);
    }

    const mapSuperhero = ({ id, nickname, images}) => {
        const imgsrc = 'http://127.0.0.1:5000/images/' + images[0];
        return (
          <li key={id}>
                <img src={imgsrc} alt='superhero' />
                <p>{nickname}</p> 
          </li>
        );
      };

    return (
        <div>
            {isError && <div>Error</div>}
            {isFetching && <div>Is loading...</div>}
            <button onClick={prevPage}>prev</button>
            <button onClick={nextPage}>next</button>
            <ul>{superheroes.map(mapSuperhero)}</ul>
        </div>
    )
}

export default SuperheroesLoad;