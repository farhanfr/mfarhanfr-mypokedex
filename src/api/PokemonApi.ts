import axios from "axios";
import { BASE_URL } from "../utils/consts";

export const fetchPokemonList = async (page: number) => {
  const offset = 9 * (page - 1);

  const URL = `${BASE_URL}/pokemon?offset=${offset}&limit=9`;
  const response = await axios.get(URL)

  const getPokemon = response.data.results.map(async(nameMonster:{
    name:string
  })=>(await fetchPokemon(nameMonster.name)).data)

  const pokemonList = Promise.all(getPokemon);
  return pokemonList;
};

export const fetchPokemon = async (nameMonster: string) => {

  const URL = `${BASE_URL}/pokemon/${nameMonster}`;
  const response = await axios.get(URL)
  return response;
};

export const fetchPokemonType = async () => {
  const URL = `${BASE_URL}/type`;
  const response = await axios.get(URL)
  return response;
};

export const fetchPokemonByType = async (typeMonster:string) => {

  const URL = `${BASE_URL}/type/${typeMonster}`
  const response = await axios.get(URL)

  const getPokemon = response.data.results.map(async(nameMonster:{
    name:string
  })=>(await fetchPokemon(nameMonster.name)).data)

  const pokemonList = Promise.all(getPokemon);
  return pokemonList;
  
};



