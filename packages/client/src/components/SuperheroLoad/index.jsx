import React, { useEffect, useState } from 'react';
import * as API from '../../api';
import style from './SuperheroeLoad.module.scss';
import { useParams, NavLink } from 'react-router-dom';

function SuperheroLoad() {
    const [superhero, setSuperhero] = useState({});
    const [image, setImage] = useState('logo192.png');
    const [superpowers, setSuperpowers] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const params = useParams();
    const shId = params.id;
    

    useEffect(()=>{
        setIsFetching(true);
        API.getSuperheroById(shId)
        .then((result) => {
            //console.log(result.data.data);
            setSuperhero(result.data.data);
            setImage(result.data.data.images);
            setSuperpowers(result.data.data.superpowers);
        })
        .catch((error) => {setIsError(error)})
        .finally(() => {setIsFetching(false);});
       
    },[shId]);

    const imgsrc = 'http://127.0.0.1:5000/images/';

    return (
        <div className={style.shStyle}>
            {isError && <div>Error</div>}
            {isFetching && <div>Is loading...</div>}
            <img src={imgsrc+image} alt={superhero.nickname} />
            <p>Nickname: {superhero.nickname}</p>
            <p>Real name: {superhero.real_name}</p>
            <p>Origin: {superhero.origin_description}</p>
            <p>Superpowers: {superpowers.map((sp, index) => {
                return(
                    <span key={index}>{sp}, </span>
                );
            })}</p>
            <p>Catch phrase: {superhero.catch_phrase}</p>
            <div className={style.navStyle}>
                <NavLink to={`/addImage/${shId}`} className={style.navLinkStyle}>Edit Image</NavLink>
                <NavLink to={`/addPowers/${shId}`} className={style.navLinkStyle}>Add Powers</NavLink>
            </div>
        </div>
    )
}

export default SuperheroLoad;