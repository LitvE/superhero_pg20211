import ACTION_TYPES from './actionTypes';

//get Superheroes
export const getSuperheroesAction = () => ({
    type: ACTION_TYPES.GET_SUPERHEROES_ACTION,
});
export const getSuperheroesRequest = () => ({
    type: ACTION_TYPES.GET_SUPERHEROES_REQUEST,
});
export const getSuperheroesSuccess = (superheroes) => ({
    type: ACTION_TYPES.GET_SUPERHEROES_SUCCESS,
    superheroes: superheroes,
});
export const getSuperheroesError = (e) => ({
    type: ACTION_TYPES.GET_SUPERHEROES_ERROR,
    error: e,
});

//get Superhero by id

export const getSuperheroAction = (id) => ({
    type: ACTION_TYPES.GET_SUPERHERO_ACTION,
    id: id,
});
export const getSuperheroRequest = () => ({
    type: ACTION_TYPES.GET_USER_REQUEST,
});
export const getUserSuccess = (id) => ({
    type: ACTION_TYPES.GET_SUPERHERO_REQUEST,
    id: id,
});
export const getSuperheroError = (e) => ({
    type: ACTION_TYPES.GET_SUPERHERO_ERROR,
    error: e,
});


// create new Superhero

export const createSuperheroAction = (superhero) => ({
    type: ACTION_TYPES.CREATE_SUPERHERO_ACTION,
    superhero: superhero,
});
export const createSuperheroRequest = () => ({
    type: ACTION_TYPES.CREATE_SUPERHERO_REQUEST,
});
export const createSuperheroSuccess = (superhero) => ({
    type: ACTION_TYPES.CREATE_SUPERHERO_SUCCESS,
    superhero: superhero,
});
export const createSuperheroError = (e) => ({
    type: ACTION_TYPES.CREATE_SUPERHERO_ERROR,
    error: e,
});