import axios from "axios";
import { BASE_URL } from "../utils/consts";

type Props = {
  pokemon: { name: string };
};

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


export const fetchPokemonByType = async (typeMonster:string,adder:number = 1) => {
  const pokemonAmount = 9 * adder
  const URL = `${BASE_URL}/type/${typeMonster}`
  const response = await axios.get(URL)

  const getPokemon =  response.data.pokemon
  .filter((item: Props, index: number) => index + 1 <= pokemonAmount && item)
  .map(async (item: Props) => (await fetchPokemon(item.pokemon.name)).data);

  const pokemonList = Promise.all(getPokemon);
  return pokemonList;
  
};

export const fetchPokemonDetail = async (title:string) => {
  const URL = `${BASE_URL}/pokemon/${title}`;
  const response = await axios.get(URL)
  return response;
};



