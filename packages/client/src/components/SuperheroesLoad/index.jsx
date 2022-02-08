import React, { useEffect, useState } from 'react';
import * as API from '../../api';
import style from './SuperheroesLoad.module.scss';
import { NavLink } from 'react-router-dom';

function SuperheroesLoad() {
    const [superheroes, setSuperheroes] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(()=>{
        setIsFetching(true);
        API.getSuperheroes(currentPage)
        .then((result) => {
            //console.log(result.data.data);
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
          <li key={id} >
                <img src={imgsrc} alt='superhero' />
                <div className={style.navLinkStyle}>
                    <NavLink to={`/${id}`}>{nickname}</NavLink>
                </div>
          </li>
        );
      };

    return (
        <div>
            {isError && <div>Error</div>}
            {isFetching && <div>Is loading...</div>}
            <ul className={style.ulStyle}>{superheroes.map(mapSuperhero)}</ul>
            <button onClick={prevPage} className={style.btnStyle}>Prev</button>
            <button onClick={nextPage} className={style.btnStyle}>Next</button>
        </div>
    )
}

export default SuperheroesLoad;